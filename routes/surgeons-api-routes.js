var db = require("../models");

module.exports = function(app) {
  app.get("/api/surgeons", function(req, res) {
    db.Surgeons.findAll({}).then(function(dbSurgeons) {
      res.json(dbSurgeons);
    });
  });

  app.get("/api/surgeons/:id", function(req, res) {
    db.Surgeons.findOne({
      where: {
        surgeonId: req.params.id
      }
    }).then(function(dbSurgeons) {
      res.json(dbSurgeons);
    });
  });

  app.post("/api/surgeons", function(req, res) {
    db.Surgeons.create(req.body).then(function(dbSurgeons) {
      res.json(dbSurgeons);
    });
  });

  app.delete("/api/surgeons/:id", function(req, res) {
    db.Surgeons.destroy({
      where: {
        surgeonId: req.params.id
      }
    }).then(function(dbSurgeons) {
      res.json(dbSurgeons);
    });
  });
};
