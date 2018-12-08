module.exports = function(sequelize, Sequelize) {
	var Surgeons = sequelize.define("Surgeons", {
		surgeonId: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
	  	},
	  	surgeonName: {
			type: Sequelize.STRING,
			allowNull: false
	  	},
	  	surgeonType: {//specialty
			type: Sequelize.STRING,
			allowNull: true
	  	},
	  	surgeonPhone: {
			type: Sequelize.INTEGER,
			allowNull: true
	  	},
	  	surgeonEmail: {
			type: Sequelize.STRING,
			allowNull: true
	  	},
	  	surgeonGownSize: {
			type: Sequelize.STRING,
			allowNull: false
	  	},
	  	surgeonGloveSize: {
			type: Sequelize.STRING,
			allowNull: false
	  	},
	  	surgeonGeneralNotes: {
	  		type: Sequelize.TEXT,
	  		allowNull: true
	  	},
	  	surgeonProcedures: {
			type: Sequelize.TEXT,
			allowNull: true
	  	}
	});
	return Surgeons;
 };
 