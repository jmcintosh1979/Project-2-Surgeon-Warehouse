module.exports = function(sequelize, Sequelize) {
  var Surgeons = sequelize.define("Surgeons", {
    surgeonId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    surgeonName: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
        len: [1]
      }
    },
    surgeonGender: {
      type: Sequelize.STRING,
      validate: {
        notNull: true,
        len: [1]
      }
    },
    surgeonSpecialty: {
      type: Sequelize.STRING,
      validate: {
        notNull: true,
        len: [1]
      }
    },
    surgeonPhone: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
        len: [1]
      }
    },
    surgeonEmail: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true,
        len: [1]
      }
    },
    surgeonGownSize: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
        len: [1]
      }
    },
    surgeonGloveSize: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
        len: [1]
      }
    },
    surgeonGeneralNotes: {
      type: Sequelize.TEXT,
      validate: {
        notEmpty: false,
        len: [1]
      }
    },
    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    }
  });
  return Surgeons;
};
