'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.hasMany(models.CustomerAddress, { foreignKey: 'customerId'})
    }
  };
  Customer.init({
    customerName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'customer_name'
    }
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};