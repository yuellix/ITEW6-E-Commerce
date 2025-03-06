<template>
    <div class="shopping-cart">
        <h2>Shopping Cart</h2>
        <div v-if="cartItems.length ===0" class="empty-cart">Your cart is empty</div>
    </div>
    <div v-else>
        <div class="cart-items">
            <div v-for="item in cartItems" :key="item.id" class="cart-item">
                <div class="item-details">
                    <h3>{{ item.name }}</h3>
                    <p>${{ item.price.toFixed(2) }} x {{ item.quantity }}</p>
                    <p class="subtotal">Subtotal: ${{ item.subtotal.toFixed(2) }}</p>
                </div>

                <div class="item-actions">
                    <button @click="addToCart(item.id)" class="quantity-btn">+</button>
                    <button @click="removeFromCart(item.id)" class="quantity-btn">-</button>
                    <button @click="removeItemCompletely(item.id)" class="remove-btn">Remove</button>
                </div>
            </div>
        </div>
        <div class="cart-summary">
            <h3>Cart Summary</h3>
            <p>Total Items: {{ cartItemCount }}</p>
            <p class="total-price">Total Price: ${{ cartTotal.toFixed(2) }}</p>
            <button class="checkout-btn">Proceed to Checkout</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'ShoppingCart',
    computed: {
        ...mapGetters({
            cartItems: 'cart/cartItems',
            cartTotal: 'cart/cartTotal',
            cartItemCount: 'cart/cartItemCount'
        })
    },
    methods: {
        ...mapActions({
            addToCart: 'cart/addToCart',
            removeFromCart: 'cart/removeFromCart',
            removeItemCompletely: 'cart/removeItemCompletely'
        })
    }
};
</script>

<style>
.shopping-cart {
  flex: 1;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 15px;
  background-color: #f9f9f9;
}

.empty-cart {
  text-align: center;
  padding: 20px;
  color: #888;
}

.cart-items {
  margin-bottom: 20px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
}

.item-actions {
  display: flex;
  align-items: center;
  gap: 5px;
}

.quantity-btn {
  width: 30px;
  height: 30px;
  background-color: #eee;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.remove-btn {
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
}

.subtotal {
  font-weight: bold;
}

.cart-summary {
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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
