module.exports = function(sequelize, Sequelize) {
  var Items = sequelize.define("Items", {
    itemId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    itemName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    itemCatalog: {
      type: Sequelize.STRING,
      allowNull: true
    },
    itemCategory: {
      type: Sequelize.STRING,
      allowNull: true
    },
    itemCpu: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: true
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    }
  });

  Items.associate = function(models) {
    Items.belongsTo(models.Procedures, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  
  return Items;
};
