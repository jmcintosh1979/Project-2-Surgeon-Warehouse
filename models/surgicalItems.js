module.exports = function(sequelize, Sequelize) {
  var Items = sequelize.define("Items", {
    surgicalItemId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    surgicalItemDescription: {
      type: Sequelize.STRING,
      allowNull: false
    },
    surgicalItemCatalogNumber: {
      type: Sequelize.STRING,
      validate: {
        allowNull: true
      }
    },
    surgicalItemCategory: {
      type: Sequelize.STRING,
      validate: {
        allowNull: true
      }
    },
    surgicalItemCost: {
      type: Sequelize.DECIMAL(10, 2),
      validate: {
        allowNull: true
      }
    },
    surgicalItemCostPerUnit: {
      type: Sequelize.DECIMAL(10, 2),
      validate: {
        allowNull: true
      }
    },
    surgicalItemUnitOfMeasure: {
      type: Sequelize.STRING,
      validate: {
        allowNull: true
      }
    },
    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    }
  });


  Items.associate = function(models) {
    Items.belongsTo(models.Procedures, {
      foreignKey: {allowNull: false}
    });
  };

  return Items;
};
