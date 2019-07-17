// items table sequalize schema.

module.exports = function(sequelize, DataTypes) {
  const Item = sequelize.define('Items', {
   
    name: {
    type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
      },
    image: {
    type: DataTypes.STRING
    },
    price: {
      type: DataTypes.DECIMAL(10, 2)  
      }
  });
 

   
    return Item;
  }; 
  
  