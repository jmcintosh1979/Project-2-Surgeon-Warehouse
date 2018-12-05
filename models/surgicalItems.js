module.exports = function(sequelize, Sequelize) {
  var Items = sequelize.define("Items", {
    surgicalItemId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    surgicalItemDescription: {
      type: Sequelize.STRING,
      //THIS MIGHT NOT WORK TEST IF THIS WORKS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      defaultValue: surgicalItemCatalogNumber,
      //THIS MIGHT NOT WORK TEST IF THIS WORKS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      //if not look up uuid data types
      allowNull: false
    },
    surgicalItemCatalogNumber: {
      type: Sequelize.STRING,
      allowNull: false
    },
    surgicalItemCategory: {
      type: Sequelize.STRING,
      defaultValue: "Misc.",
      allowNull: false
    },
    surgicalItemCost: {
      type: Sequelize.DECIMAL[10.2],
      defaultValue: 0.00,
      allowNull: false
    },
    surgicalItemCostPerUnit: {
      type: Sequelize.DECIMAL[10.2],
      defaultValue: 0.00,
      allowNull: false
    },
    surgicalItemUnitOfMeasure: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
      allowNull: false
    }
  });
  return Items;
};
