<template>
  <div class="cart-summary">
    <h3>Cart Summary</h3>
    <p>Total Items: {{ cartItemCount }}</p>
    <p class="total-price">Total Price: ${{ cartTotal.toFixed(2) }}</p>
    <button class="checkout-btn">Proceed to Checkout</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CartSummary',
  computed: {
    ...mapGetters({
      cartItemCount: 'cart/cartItemCount',
      cartTotal: 'cart/cartTotal'
    })
  }
};
</script>

<style>
.cart-summary {
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
}

.total-price {
  font-size: 1.2em;
  font-weight: bold;
  color: #2a8000;
}

.checkout-btn {
  width: 100%;
  padding: 10px;
  background-color: #2a8000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.checkout-btn:hover {
  background-color: #236b00;
}
</style>

