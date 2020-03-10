const express = require('express');

module.exports = {  
    get:  (con, callback) =>{      
      con.query("SELECT * FROM fiscales", callback)
    }
    }