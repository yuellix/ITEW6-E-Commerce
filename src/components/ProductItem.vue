<template>
    <div class="product-item">
      <h3>{{ product.name }}</h3>
      <p class="price">${{ product.price.toFixed(2) }}</p>
      <button @click="addToCart(product.id)" class="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    name: 'ProductItem',
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    methods: {
      ...mapActions({
        addToCart: 'cart/addToCart'
      })
    }
  };
  </script>
  
  <style>
  .product-item {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .price {
    font-weight: bold;
    color: #2a8000;
    margin-bottom: 10px;
  }
  
  .add-to-cart-btn {
    margin-top: auto;
    padding: 8px;
    background-color: #4a90e2;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .add-to-cart-btn:hover {
    background-color: #357abD;
  }
  </style>