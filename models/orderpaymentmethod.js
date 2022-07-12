'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderPaymentMethod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  OrderPaymentMethod.init({
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'order_id'
    },
    paymentMethodId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'payment_method_id'
    }
  }, {
    sequelize,
    modelName: 'OrderPaymentMethod',
  });
  return OrderPaymentMethod;
};