var db = require("../models");

module.exports = function(app) {

  // Get all
  app.get("/api/surgeons", function(req, res) {
    db.Surgeons.findAll({}).then(function(dbSurgeons) {
      res.json(dbSurgeons);
    });
  });

  // Search by ID
	app.get("/api/Surgeons/:surgeonId", function(req, res) {
    db.Surgeons.findAll({
      where: {
        surgeonId: req.params.surgeonId
      }
    }).then(function(dbSurgeons) {
      res.json(dbSurgeons);
    });
  });
  
  // Search by Type
  app.get("/api/Surgeons/:surgeonType", function(req, res) {
    db.Surgeons.findAll({
      where: {
			surgeonType: req.params.surgeonType
      }
    }).then(function(dbSurgeons) {
      res.json(dbSurgeons);
	 });
  });
  
  // Search by Name
  app.get("/api/Surgeons/:surgeonName", function(req, res) {
	  db.Surgeons.findAll({
	  where: {
		surgeonName: req.params.surgeonName
	  }
	}).then(function(dbSurgeons) {
	  res.json(dbSurgeons);
	});
 });

  // Create a new example
  app.post("/api/Surgeons", function(req, res) {
    db.Surgeons.create(req.body).then(function(dbSurgeons) {
      res.json(dbSurgeons);
    });
  });

  // Delete an example by id
  app.delete("/api/Surgeons/:surgeonId", function(req, res) {
    db.Surgeons.destroy({
      where: {
        surgeonId: req.params.surgeonId
      }
    }).then(function(dbSurgeons) {
      res.json(dbSurgeons);
    });
  });
};
