//const controller = {};
const moment = require('moment');
const peritajes = require("../model/peritajes");
const peritos = require("../model/peritos");
const fiscales = require("../model/fiscales");
const estados = require("../model/estados");
const ubicacion = require("../model/ubicacion");
 
 

module.exports = {
  
    index: function(req, res) {
      peritajes.get(req.con, function(err, rows) {
        res.render("peritajes/peritajes", { data: rows ,  moment:moment})
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
    
  },
  } 

  



  


 
/*
controller.list = (req, res) => {
    req.getConnection((err,conn) => {
        conn.query(`SELECT
                    peritajes.id,
                    peritajes.ruc_pericia,
                    peritajes.fecha_pericia,
                    peritajes.nue_pericia,
                    peritajes.plazo_pericia,
                    estados.gls_estado,
                    fiscales.nombre_fiscal,
                    peritos.nombre_perito
                    FROM
                    peritajes
                    INNER JOIN estados ON peritajes.estado_pericua_id = estados.id
                    INNER JOIN fiscales ON peritajes.fiscal_pericia_id = fiscales.id
                    INNER JOIN peritos ON peritajes.perito_asignado_id = peritos.id`, (err, peritajes) =>{
            if (err){
                res.json(err);
            }
            
            res.render('peritajes/peritajes',{
                data: peritajes,
                moment:moment
            });
        });
    });
 
};

controller.delete = (req,res) =>{




    console.log(req.params);
    res.send("heeeeeeee");

}




controller.registro = (req,res) =>{
    //peritajereg

    let varperito = peritos.getPeritos();
    console.log(peritos);
     
    res.render('peritajes/peritajereg',{
      data: varperito

    })
    
  

}

 


controller.view = (req,res) =>{
    id = req.params.id;
    req.getConnection((err,conn) => {
        conn.query(`SELECT
                    peritajes.id,
                    peritajes.ruc_pericia,
                    peritajes.fecha_pericia,
                    peritajes.nue_pericia,
                    peritajes.plazo_pericia,
                    estados.gls_estado,
                    fiscales.nombre_fiscal,
                    peritos.nombre_perito,
                    peritajes.info_solicitud
                    FROM
                    peritajes
                    INNER JOIN estados ON peritajes.estado_pericua_id = estados.id
                    INNER JOIN fiscales ON peritajes.fiscal_pericia_id = fiscales.id
                    INNER JOIN peritos ON peritajes.perito_asignado_id = peritos.id
                    where peritajes.id=`+id, (err, peritajeView) =>{
            if (err){
                res.json(err);
            }
            
            res.render('peritajes/viewperitaje',{
                data: peritajeView,
                moment:moment
            });
        });
    });
  

}

module.exports = controller;*/