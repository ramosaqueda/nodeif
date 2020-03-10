const express = require('express');

module.exports = {  
    get:  (con, callback) =>{      
      con.query("SELECT * FROM estados", callback)
    }
    }