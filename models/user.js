//  This creates a new table to store orders.

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Users", {
    username: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    creditCardNumber: DataTypes.STRING,
    expDate: DataTypes.STRING,
    cvv: DataTypes.INTEGER,
    swag1name: DataTypes.STRING,
    swag1quantity: { type: DataTypes.INTEGER, defaultValue: 0 },
    swag2name: DataTypes.STRING,
    swag2quantity: { type: DataTypes.INTEGER, defaultValue: 0 },
    swag3name: DataTypes.STRING,
    swag3quantity: { type: DataTypes.INTEGER, defaultValue: 0 },
    swag4name: DataTypes.STRING,
    swag4quantity: { type: DataTypes.INTEGER, defaultValue: 0 },
    swag5name: DataTypes.STRING,
    swag5quantity: { type: DataTypes.INTEGER, defaultValue: 0 }
  });
  return User;
};
