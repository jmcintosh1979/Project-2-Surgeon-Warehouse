var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/Items", function(req, res) {
    db.Items.findAll({}).then(function(dbItems) {
      res.json(dbItems);
    });
  });

  // Create a new example
  app.post("/api/Items", function(req, res) {
    db.Items.create(req.body).then(function(dbItems) {
      res.json(dbItems);
    });
  });

  // Delete an example by id
  app.delete("/api/Items/:surgicalItemId", function(req, res) {
    db.Items.destroy({ where: { surgicalItemId: req.params.surgicalItemId } }).then(function(dbItems) {
      res.json(dbItems);
    });
  });

  app.get("/api/Items/:surgicalItemCategory", function(req, res) {
    // Find one Author with the id in req.params.id and return them to the user with res.json
    db.Items.findOne({
      where: {
        surgicalItemCategory: req.params.surgicalItemCategory
      }
    }).then(function(dbItems) {
      res.json(dbItems);
    });
  });
};
