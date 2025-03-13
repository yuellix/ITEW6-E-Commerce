import Vue from 'vue';
import Vuex from 'vuex';
import product from './modules/product'; // Import directly with correct name
import cart from './modules/cart';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products: product, // Use the imported variable
    cart: cart
  }
});