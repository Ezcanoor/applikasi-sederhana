const { Product } = require("../models");
class ProductController {
  static async getAllProduct(req, res) {
    try {
      const products = await Product.findAll();
      res.status(200).json(products);
    } catch (error) {
      res.send(error);
    }
  }

  static async createProduct(req, res) {
    try {
      const { name, price } = req.body
      const product = Product.create({ name, price})
      res.status(200).json(product)
    } catch (error) {
      res.send(error)
    }
  }
}

module.exports = ProductController
