export default {
  namespaced: true, // Add this line to ensure namespacing works correctly
  state: () => ({
    products: [
      { id: 1, name: 'Smartphone', price: 699.99, image: 'smartphone.jpg' },
      { id: 2, name: 'Laptop', price: 1299.99, image: 'laptop.jpg' },
      { id: 3, name: 'Tablet', price: 399.99, image: 'tablet.jpg' },
      { id: 4, name: 'Headphones', price: 149.99, image: 'headphones.jpg' },
      { id: 5, name: 'Smartwatch', price: 249.99, image: 'smartwatch.jpg' },
      { id: 6, name: 'Wireless Earbuds', price: 129.99, image: 'earbuds.jpg' },
      { id: 7, name: 'Gaming Console', price: 499.99, image: 'console.jpg' },
      { id: 8, name: 'Digital Camera', price: 599.99, image: 'camera.jpg' },
      { id: 9, name: 'Bluetooth Speaker', price: 79.99, image: 'speaker.jpg' },
      { id: 10, name: 'External Hard Drive', price: 119.99, image: 'harddrive.jpg' }
    ]
  }),
    
  getters: {
    allProducts: (state) => state.products,
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id);
    }
  }
};