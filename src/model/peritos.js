const express = require('express');
let fechoy = new Date();
 
 
module.exports = {
  
    get:  (con, callback) =>{      
      con.query("SELECT * FROM peritos", callback)
    },
  
    getById: (con, id, callback) => {
      con.query(`SELECT * FROM peritos WHERE id = ${id}`, callback)
    },
  
    create: (con, data, callback) => {
      let qry = `INSERT INTO peritos SET      
      nombre_perito = '${data.nombre_perito}'`;    
      console.log(qry);
      con.query(qry ,     callback      )
    },
  
    update: (con, data, id, callback) => {
      con.query(
        `UPDATE peritos SET 
        nombre_perito = '${data.nombre}', 
        updated_at = '${fechoy}' 
        WHERE peritos.id = ${id}`,
        callback
      )
    },
  
    destroy: (con, id, callback) =>{
      con.query(`DELETE FROM peritos WHERE peritos.id = ${id}`, callback)
    }
  }
  
