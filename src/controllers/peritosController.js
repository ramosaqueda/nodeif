const peritos = require("../model/peritos")

module.exports = {
  index: function(req, res) {
    peritos.get(req.con, function(err, rows) {
      res.render("peritos/peritosList", { data: rows })
    })
  },

  create: function(req, res) {
    res.render("peritos/peritajereg")
  },

  store: function(req, res) {
   
    peritos.create(req.con, req.body, function(err) {
      res.redirect("/peritos")
    })
  },

  edit: function(req, res) {
   
     peritos.getById(req.con, req.params.id, function(err, rows) {
      
      res.render("peritos/edit")
  })
  },

  update: function(req, res) {
    peritos.update(req.con, req.body, req.params.id, function(err) {
      res.redirect("/peritos")
    })
  },

  destroy: function(req, res) {
    peritos.destroy(req.con, req.params.id, function(err) {
      res.redirect("/peritos")
    })
  }
}

 