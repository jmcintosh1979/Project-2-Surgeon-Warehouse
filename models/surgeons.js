module.exports = function(sequelize, Sequelize) {
	var Surgeons = sequelize.define("Surgeons", {
		surgeonsId: {
		 type: Sequelize.INTEGER,
		 autoIncrement: true,
		 primaryKey: true
	  },
	  surgeonsEmail: {
		  type: Sequelize.STRING,
		  allowNull: true
	  },
	  surgeonsGownSize: {
		  type: Sequelize.STRING,
		  allowNull: false,
		  validate: {
			  
		  }
	  },

	});
	return Surgeons;
 };
 