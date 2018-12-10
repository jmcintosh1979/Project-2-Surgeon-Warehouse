module.exports = function(sequelize, Sequelize) {
  var Procedures = sequelize.define("Procedures", {
    procedureId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    procedureName: {
      type: Sequelize.STRING,
      notNull: true,
      validate: {
        len: [1]
      }
    },
    procedureTime: {
      type: Sequelize.INTEGER,
      notNull: true,
      validate: {
        len: [1]
      }
    },
    procedureCptId: {
      type: Sequelize.INTEGER,
      notNull: true,
      validate: {
        len: [1]
      }
    },
    procedurePosition: {
      type: Sequelize.TEXT,
      notNull: true,
      validate: {
        len: [1]
      }
    },
    procedureRequiredPersonnel: {
      type: Sequelize.TEXT,
      notNull: true,
      validate: {
        len: [1]
      }
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

  Procedures.associate = function(models) {
    Procedures.hasMany(models.Items);
    Procedures.belongsTo(models.Surgeons, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  
  return Procedure;
};
