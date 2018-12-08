module.exports = function(sequelize, Sequelize) {
	var ProcedureSurgeons = sequelize.define("ProcedureSurgeons", {
		ProcedureSurgeonsId: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
	  	},
		procedureID: {
			type: Sequelize.INTEGER,
			allowNull: true
	  	},
	  	surgeonID: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		surgicalItemID: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		surgeonProcedureItems: {
			type: Sequelize.STRING,
			allowNull: false
		},
		surgeonProcedureGeneralNotes: {
	  		type: Sequelize.TEXT,
	  		allowNull: true
		}
	});
	return ProcedureSurgeons;
 };
 