<template>
    <div>
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
</script>