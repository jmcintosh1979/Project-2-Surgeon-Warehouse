var db = require("../models");

module.exports = function(app) {
  app.get("/api/procedure", function(req, res) {
    db.Procedures.findAll({}).then(function(dbProcedure) {
      res.json(dbProcedure);
    });
  });

  app.get("/api/procedure/:id", function(req, res) {
    db.Procedures.findOne({
      where: {
        procedureId: req.params.id
      }
    }).then(function(dbProcedure) {
      res.json(dbProcedure);
    });
  });

  app.post("/api/procedure", function(req, res) {
    db.Procedures.create(req.body).then(function(dbProcedure) {
      res.json(dbProcedure);
    });
  });

  app.delete("/api/procedure/:id", function(req, res) {
    db.Procedures.destroy({
      where: {
        procedureId: req.params.id
      }
    }).then(function(dbProcedure) {
      res.json(dbProcedure);
    });
  });
};
