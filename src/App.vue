<template>
  <!-- <div class="e-commerce-app">
    <header>
      <h1>Vue E-Commerce Store</h1>
      <div class="cart-info">
        <span>Cart: {{ cartItemCount }} items</span>
        <button @click="isCartVisible = !isCartVisible">
          {{ isCartVisible ? 'Hide Cart' : 'Show Cart' }}
        </button>
      </div>
    </header> -->
    
    <!-- <main>
      <div class="app-content">
        <ProductList />
        <ShoppingCart v-if="isCartVisible" />
      </div>
    </main>
  </div> -->
</template>

<script>
// import { mapGetters } from 'vuex';
// import ProductList from './components/ProductList.vue';
// import ShoppingCart from './components/ShoppingCart.vue';

// export default {
//   name: 'App',
//   components: {
//     ProductList,
//     ShoppingCart
//   },
//   data() {
//     return {
//       isCartVisible: false
//     };
//   },
//   computed: {
//     ...mapGetters({
//       cartItemCount: 'cart/cartItemCount'
//     })
//   }
// };
</script>

<style>
.e-commerce-app {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.cart-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.app-content {
  display: flex;
  gap: 20px;
}

@media (max-width: 768px) {
  .app-content {
    flex-direction: column;
  }
}
</style>