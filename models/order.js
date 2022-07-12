'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsToMany(models.Product, { through: 'OrderProduct', foreignKey: 'order_id'})
      Order.belongsToMany(models.PaymentMethod, { through: 'OrderPaymentMethod', foreignKey: 'order_id'})


    }
  };
  Order.init({
    invoiceNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      field:"invoice_number"
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};