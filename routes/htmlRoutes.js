var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Surgeons.findAll({}).then(function (Surgeons) {
      db.Procedures.findAll({}).then(function (Procedures) {
        // console.log(Surgeons);
        // console.log(Procedures);
        res.render("index", { surgeons: Surgeons, procedures: Procedures });
      });
    });
  });

  //PrefCard Page
  // Load Surgeons Preference page
  app.get("/prefcard", function (req, res) {
    db.Surgeons.findAll({}).then(function (Surgeons) {
      db.Procedures.findAll({}).then(function (Procedures) {
        db.Items.findAll({}).then(function (Items) {
          // console.log(Surgeons);
          // console.log(Procedures);
          res.render("prefcard", {
            surgeons: Surgeons,
            procedures: Procedures,
            items: Items,
          });
        });
      });
    });
  });

  // ADD //
  // Load Add Items page
  app.get("/addItems", function (req, res) {
    db.Items.findAll({}).then(function (Items) {
      // console.log(Items);
      res.render("additem", { items: Items });
    });
  });

  // Load Add Procedure page
  app.get("/addProcedure", function (req, res) {
    db.Procedures.findAll({}).then(function (Procedure) {
      // console.log(Procedure);
      res.render("addprocedure", { procedure: Procedure });
    });
  });

  // Load Add Surgeon page
  app.get("/addSurgeon", function (req, res) {
    db.Surgeons.findAll({}).then(function (Surgeons) {
      // console.log(Surgeons);
      res.render("addsurgeon", { surgeons: Surgeons });
    });
  });
  
  // LISTS //
  // Load Procedure List page
  app.get("/procedurelist", function (req, res) {
    db.Procedures.findAll({}).then(function (Procedure) {
      // console.log(Procedure);
      res.render("procedurelist", { procedure: Procedure });
    });
  });

  // Load Surgeon List page
  app.get("/surgeonList", function (req, res) {
    db.Surgeons.findAll({}).then(function (Surgeons) {
      // console.log(Items);
      res.render("surgeonlist", { surgeons: Surgeons });
    });
  });

  // Load Items List page
  app.get("/itemList", function (req, res) {
    db.Items.findAll({}).then(function (Items) {
      // console.log(Items);
      res.render("itemslist", { items: Items });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
