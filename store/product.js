export const state = () => ({
  products: [],
  productsCategories: []
});

export const actions = {
  // Функция для связи с API
  async request(ctx, url) {
    try {
      const headers = {};
      let body;
      let method = "GET";

      const response = await fetch(url, {
        method,
        headers,
        body
      });

      return await response.json();
    } catch (e) {
      console.warn(e.message);
    }
  },

  // Получение продуктов
  async fetchProduct({ commit, dispatch }, id) {
    const res = await dispatch(
      "request",
      `https://frontend-test.idaproject.com/api/product?category=${id}`
    );

    commit("SET_PRODUCTS", res);
  },

  // Получение списка продуктов
  async fetchProductCategories({ commit, dispatch }) {
    const res = await dispatch(
      "request",
      "https://frontend-test.idaproject.com/api/product-category"
    );

    commit("SET_PRODUCTS_CATEGORIES", res);
  }
};
export const mutations = {
  // Добавление продуктов в state
  SET_PRODUCTS(state, payload) {
    state.products = payload;
  },

  // Добавление списка продуктов в state
  SET_PRODUCTS_CATEGORIES(state, payload) {
    state.productsCategories = payload;
  },

  // Сортировака продуктов
  SORT_PRODUCTS(state, payload = "price") {
    state.products = state.products.sort((a, b) => b[payload] - a[payload]);
  }
};
export const getters = {
  // Получение продуктов из state
  getProducts(state) {
    return state.products;
  },

  // Получение списка продуктов из state
  getProductsCategories(state) {
    return state.productsCategories;
  }
};
