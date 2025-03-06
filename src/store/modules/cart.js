export default {
    state: () => ({
      items: [] // Array of { productId, quantity }
    }),
    
    mutations: {
      ADD_TO_CART(state, productId) {
        const existingItem = state.items.find(item => item.productId === productId);
        
        if (existingItem) {
          existingItem.quantity++;
        } else {
          state.items.push({ productId, quantity: 1 });
        }
      },
      
      REMOVE_FROM_CART(state, productId) {
        const existingItem = state.items.find(item => item.productId === productId);
        
        if (existingItem) {
          existingItem.quantity--;
          
          // Remove item from cart if quantity reaches zero
          if (existingItem.quantity <= 0) {
            state.items = state.items.filter(item => item.productId !== productId);
          }
        }
      },
      
      REMOVE_ITEM_COMPLETELY(state, productId) {
        state.items = state.items.filter(item => item.productId !== productId);
      }
    },
    
    actions: {
      addToCart({ commit }, productId) {
        commit('ADD_TO_CART', productId);
      },
      
      removeFromCart({ commit }, productId) {
        commit('REMOVE_FROM_CART', productId);
      },
      
      removeItemCompletely({ commit }, productId) {
        commit('REMOVE_ITEM_COMPLETELY', productId);
      }
    },
    
    getters: {
      cartItems: (state, getters, rootState, rootGetters) => {
        return state.items.map(item => {
          const product = rootGetters['products/getProductById'](item.productId);
          return {
            id: item.productId,
            name: product.name,
            price: product.price,
            quantity: item.quantity,
            subtotal: product.price * item.quantity
          };
        });
      },
      
      cartTotal: (state, getters) => {
        return getters.cartItems.reduce((total, item) => total + item.subtotal, 0);
      },
      
      cartItemCount: (state) => {
        return state.items.reduce((count, item) => count + item.quantity, 0);
      }
    }
  };