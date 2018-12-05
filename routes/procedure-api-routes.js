var db = require("../models");

module.exports = function(app) {
  app.get("/api/procedure", function(req, res) {
    db.Procedure.findAll({}).then(function(dbProcedure) {
      res.json(dbProcedure);
    });
  });

  app.get("/api/procedure/:id", function(req, res) {
    db.Production.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbProcedure) {
      res.json(dbProcedure);
    });
  });

  app.post("/api/procedure", function(req, res) {
    db.Procedure.create(req.body).then(function(dbProcedure) {
      res.json(dbProcedure);
    });
  });

  app.delete("/api/procedure/:id", function(req, res) {
    db.Procedure.destroy({
      where: {
        procedureId: req.params.id
      }
    }).then(function(dbProcedure) {
      res.json(dbProcedure);
    });
  });
};
