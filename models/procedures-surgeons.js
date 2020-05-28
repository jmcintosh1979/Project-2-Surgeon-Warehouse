module.exports = function(sequelize, Sequelize) {
  var ProceduresSurgeons = sequelize.define("ProceduresSurgeons", {
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    }
  });

  ProceduresSurgeons.associate = function(models) {
    ProceduresSurgeons.hasMany(models.Surgeons, {
      foreignKey: {
        allowNull: false
      }      
    }),
    ProceduresSurgeons.hasMany(models.ItemsProcedures, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  
  return ProceduresSurgeons;
};
