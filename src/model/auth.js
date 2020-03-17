const express = require('express');
module.exports = {  
    valida_adm:  (con, data, callback) =>{
      let qry = `SELECT * FROM users WHERE users.usuario = '${data.user}'`;    
      console.log(qry);  
      con.query(qry, callback)
    }
}