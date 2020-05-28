module.exports = function(sequelize, Sequelize) {
  var ItemsProcedures = sequelize.define("ItemsProcedures", {
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    }
  });

  ItemsProcedures.associate = function(models) {
    ItemsProcedures.hasMany(models.Items, {
      foreignKey: {
        allowNull: false
      }      
    }),
    ItemsProcedures.hasMany(models.Procedures, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  
  return ItemsProcedures;
};
