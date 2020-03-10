const express = require('express');

module.exports = {  
    get:  (con, callback) =>{      
      con.query(` SELECT 
      cajas.id as id,
      CONCAT(bodegas.bodega, ' Caja ',cajas.caja) AS ubicacion 
      FROM
      bodegas
      INNER JOIN cajas ON cajas.id_bodega = bodegas.id   
      `, callback)
    }
    }