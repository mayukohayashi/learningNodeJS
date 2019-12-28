const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path.util');

const p = path.join(rootDir, 'data', 'cart.json');

module.exports = class Cart {
  static addProduct(id) {
    // Fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
      const cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }

      // Analze the cart => Find existing product
      const existingProduct = cart.products.find(prod => prod.id === id);
      let updatedProduct;
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty += 1;
      }
    });

    // Add new product / increase quantity
  }
};
