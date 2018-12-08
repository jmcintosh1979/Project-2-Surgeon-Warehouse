var db = require("../models");

module.exports = function(app) {
  app.get("/api/items", function(req, res) {
    db.Items.findAll({}).then(function(dbItems) {
      res.json(dbItems);
    });
  });

  app.get("/api/items/:id", function(req, res) {
    db.Items.findOne({
      where: {
        surgicalItemId: req.params.id
      }
    }).then(function(dbItems) {
      res.json(dbItems);
    });
  });

  app.post("/api/items", function(req, res) {
    db.Items.create(req.body).then(function(dbItems) {
      res.json(dbItems);
    });
  });

  app.delete("/api/items/:id", function(req, res) {
    db.Items.destroy({
      where: {
        surgicalItemId: req.params.id
      }
    }).then(function(dbItems) {
      res.json(dbItems);
    });
  });
};
