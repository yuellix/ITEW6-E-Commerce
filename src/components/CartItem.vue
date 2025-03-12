<template>
    <div class="cart-item">
        <div class="item-details">
            <h3>{{ item.name }}</h3>
            <p>${{ item.price.toFixed(2) }} x {{ item.quantity }}</p>
            <p class="subtotal">Subtotal: ${{ (item.price * item.quantity).toFixed(2) }}</p>
        </div>
        <div class="item-actions">
            <button @click="addToCart(item.id)" class="quantity-btn">+</button>
            <button @click="removeFromCart(item.id)" class="quantity-btn">-</button>
            <button @click="removeItemCompletely(item.id)" class="remove-btn">Remove</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'CartItem',
    props: {
        item: {
            type: Object,
            required: true
        }
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
