// purchase table sequalize schema.
//inital setup but this is not correct

module.exports = function (sequelize, DataTypes) {
    const Purchase = sequelize.define('Purchases', {

        user_ID: {
            type: DataTypes.INTEGER
        },
        item_ID: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DECIMAL(10, 2)
        }
    });
    // Purchase.associate = function (models) {
    //     Purchase.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

        return Purchase;
    };
