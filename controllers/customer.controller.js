const { Customer, CustomerAddress } = require('../models')

class CustomerController {
  static async getAllCustomer(req,res) {
    try {
      const customers = await Customer.findAll({
        include: [CustomerAddress]
      })
      res.status(200).json(customers)
    } catch (error) {
      res.send(error)
    }
  }

  static async createCustomer(req,res) {
    try {
      const { customerName, address } = req.body;
      const customer = await Customer.create({customerName})
      const customerAddress = await CustomerAddress.create({ id: customer.id, address})
      res.status(200).json(customer)
    } catch (error) {
      res.send(error)
    }
  }
}

module.exports = CustomerController