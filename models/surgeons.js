module.exports = function(sequelize, Sequelize) {
  var Surgeons = sequelize.define("Surgeons", {
    surgeonId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    surgeonName: {
      type: Sequelize.STRING,
      notNull: true,
      validate: {
        len: [1]
      }
    },
    surgeonGender: {
      type: Sequelize.STRING,
      notNull: true,
      validate: {
        len: [1]
      }
    },
    surgeonSpecialty: {
      type: Sequelize.STRING,
      notNull: true,
      validate: {
        len: [1]
      }
    },
    surgeonPhone: {
      type: Sequelize.STRING,
      notNull: true,
      validate: {
        len: [1]
      }
    },
    surgeonEmail: {
      type: Sequelize.STRING,
      notNull: true,
      validate: {
        len: [1]
      }
    },
    surgeonGownSize: {
      type: Sequelize.STRING,
      notNull: true,
      validate: {
        len: [1]
      }
    },
    surgeonGloveSize: {
      type: Sequelize.STRING,
      notNull: true,
      validate: {
        len: [1]
      }
    },
    surgeonGeneralNotes: {
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

  Surgeons.associate = function(models) {
    Surgeons.hasMany(models.Procedures);
  };

  return Surgeons;
};
