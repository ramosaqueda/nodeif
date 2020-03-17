//const controller = {};
const moment = require('moment');
const peritajes = require("../model/peritajes");
const peritos = require("../model/peritos");
const fiscales = require("../model/fiscales");
const estados = require("../model/estados");
const ubicacion = require("../model/ubicacion");
 
 

module.exports = {
  
    index: function(req, res) {
     user =  req.session.user_data ;  
     console.log(user);
      peritajes.get(req.con, function(err, rows) {
        res.render("peritajes/peritajes", { data: rows ,  moment:moment, user})
      })
    },

    edit: function(req, res) {
        
        peritajes.getById(req.con, req.params.id, function(err, rows) {   
                
            fiscales.get(req.con, function(err, rows_fiscales) {      
                peritos.get(req.con, function(err, rowsper) {
                    estados.get(req.con, function(err, estados) {
                        ubicacion.get(req.con, function(err, ubicacion) {
                        res.render("peritajes/peritajesEdit", { 
                            data: rows,  
                            rowsper,
                            rows_fiscales,
                            ubicacion,
                            estados,
                            moment:moment })
                        })     
                    })     
                })
    
          })
        })
      },
      update: function(req, res) {

        
            
            peritajes.update(req.con, req.body, req.params.id, function(err) {
                let id =req.params.id;  

       
                   

                if(err){
                    req.flash("error_msg", "Error de ingreso en Base de datos: "+err);
                    res.redirect("/peritajes/edit/"+id);
                 
                }else{
                    req.flash("success_msg", "Registro actualizado con éxtio");
                    res.redirect("/peritajes/edit/"+id);
                }     
                
                //
                
            
            })
        
      },
      create: function(req, res) {            
        fiscales.get(req.con, function(err, rows_fiscales ) {                  
            peritos.get(req.con, function(err, rowsper) {
                estados.get(req.con, function(err, estados) {
                    ubicacion.get(req.con, function(err, ubicacion) {
                        res.render("peritajes/peritajereg", { 
                            data: 'n',  rows_fiscales,rowsper,estados,ubicacion,moment:moment 
                        })

                    })     
                })     
            })

         })
   
    },


    add: function(req, res) {
        peritajes.create(req.con, req.body,  function(err) {
            let id = 1;
            if(err){
                req.flash("error_msg", "Error de ingreso en Base de datos: "+err);
                res.redirect("/peritajes/create");
             
            }else{
                req.flash("success_msg", "Registro ingresado con éxtio");
                res.redirect("/peritajes/create");
            }         
        })
    
  } 
  

 
  } 