import { createStore } from 'vuex';
import productsModule from './modules/products';
import cartModule from './modules/cart';

export default createStore({
  modules: {
    products: productsModule,
    cart: cartModule
  }
});