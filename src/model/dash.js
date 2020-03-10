const express = require('express');

module.exports = {  
    getPorMes:  (con, callback) =>{      
      con.query(`SELECT COUNT(id) total,   EXTRACT(MONTH FROM peritajes.fecha_pericia) as mes
      FROM peritajes
      where
      EXTRACT(YEAR  FROM peritajes.fecha_pericia) = '2020'
      GROUP BY mes`, callback)
    }
    }