module.exports = function(sequelize, DataTypes) {
  var Procedure = Sequelize.define("Procedure", {
    procedureId: {
      type: Sequelize.INTEGER,
      validate: {
        primaryKey: true,
        autoIncrement: true,
      }
    },
    procedureName: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
        len: [1]
      }
    },
    procedureTime: {
      type: Sequelize.INTEGER,
      validate: {
        notNull: true,
        len: [1]
      }
    },
    procedureCptId: {
      type: Sequelize.INTEGER,
      validate: {
        notNull: true,
        len: [1]
      }
    },
    procedurePosition: {
      type: Sequelize.TEXT,
      validate: {
        notEmpty: true,
        len: [1]
      }
    },
    procedureRequiredPersonnel: {
      type: Sequelize.TEXT,
      validate: {
        notEmpty: true,
        len: [1]
      }
    }
  });
};
