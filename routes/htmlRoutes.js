var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Surgeons.findAll({}).then(function(Surgeons) {
        db.Procedure.findAll({}).then(function(Procedures){
          console.log(Surgeons);
          console.log(Procedures);
            res.render('index', {surgeons: Surgeons.dataValues, procedures: Procedures.dataValues});
        });
    });
 
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
