export const state = () => ({
  card: []
});

export const actions = {
  // Получение корзины из localStorage
  fetchCard({ commit }) {
    const res = JSON.parse(localStorage.getItem("card"));

    commit("SET_CARD", res);
  }
};

export const mutations = {
  // Добавление корзины в state из localStorage
  SET_CARD(state, payload) {
    if (payload !== null) {
      state.card = payload;
    }
  },

  // Добавление нового продукта в корзину
  SET_CARD_ITEM(state, payload) {
    state.card.push(payload);

    localStorage.setItem("card", JSON.stringify(state.card));
  },

  // Удаление продукта из козины
  DELETE_CARD_ITEM(state, payload) {
    state.card = state.card.filter(i => i.id !== payload);

    localStorage.setItem("card", JSON.stringify(state.card));
  },

  // Очистка корзины
  CLEAR_CARD(state) {
    state.card = [];

    localStorage.removeItem("card");
  }
};
export const getters = {
  // Получение корзины из state
  getCard(state) {
    return state.card;
  }
};
