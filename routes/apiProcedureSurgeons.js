var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/ProcedureSurgeons", function(req, res) {
    db.ProcedureSurgeons.findAll({}).then(function(dbProcedureSurgeons) {
      res.json(dbProcedureSurgeons);
    });
  });

  // Create a new example
  app.post("/api/ProcedureSurgeons", function(req, res) {
    db.ProcedureSurgeons.create(req.body).then(function(dbProcedureSurgeons) {
      res.json(dbProcedureSurgeons);
    });
  });

  // Delete an example by id
  app.delete("/api/ProcedureSurgeons/:ProcedureSurgeonsId", function(req, res) {
    db.ProcedureSurgeons.destroy({ where: { ProcedureSurgeonsId: req.params.ProcedureSurgeonsId } }).then(function(dbProcedureSurgeons) {
      res.json(dbProcedureSurgeons);
    });
  });

  // Search by ID
	app.get("/api/ProcedureSurgeons/:surgeonId", function(req, res) {
	db.ProcedureSurgeons.findAll({
		where: {
			surgeonId: req.params.surgeonId
		}
		}).then(function(dbProcedureSurgeons) {
			res.json(dbProcedureSurgeons);
		});
	});

  // Search by Type
  app.get("/api/ProcedureSurgeons/:surgeonType", function(req, res) {
    db.ProcedureSurgeons.findAll({
      where: {
			surgeonType: req.params.surgeonType
      }
    }).then(function(dbProcedureSurgeons) {
      res.json(dbProcedureSurgeons);
	 });
  });
  
  // Search by Name
  app.get("/api/ProcedureSurgeons/:surgeonName", function(req, res) {
	  db.ProcedureSurgeons.findAll({
	  where: {
		surgeonName: req.params.surgeonName
	  }
	}).then(function(dbProcedureSurgeons) {
	  res.json(dbProcedureSurgeons);
	});
 });
};
