const {
  Order,
  Product,
  PaymentMethod,
  OrderProduct,
  OrderPaymentMethod,
} = require("../models");

class OrderController {
  static async getAllOrder(req, res) {
    try {
      const order = await Order.findAll({
        include: [Product, PaymentMethod],
      });
      res.status(200).json(order);
    } catch (error) {
      res.send(error);
    }
  }

  static async orderByInvoiceNumber(req, res) {
    try {
      const { invoiceNumber } = req.params;
      const orderByInvoiceNumber = await Order.findOne({
        where: {
          invoiceNumber,
        },
        include: [Product, PaymentMethod],
      });
      res.status(200).json(orderByInvoiceNumber);
    } catch (error) {
      res.send(error);
    }
  }

  static async createOrder(req, res) {
    try {
      const {
        invoiceNumber,
        paymentMethodId, // id of selected Payment Method
        productId, // array of product id
      } = req.body;

      // validate paymentMethod and product

      const order = await Order.create({
        invoiceNumber,
      });

      const orderProductDTO = productId.map(el => {
        el = {
          productId: el,
          orderId: order.id
        }
        return el
      })
      const createOrderProduct = await OrderProduct.bulkCreate(orderProductDTO)
      const createOrderPaymentMethod = await OrderPaymentMethod.create({
        orderId: order.id,
        paymentMethodId
      })
      res.status(200).json(order);
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = OrderController;
