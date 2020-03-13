//const controller = {};
const moment = require('moment');
const dash = require("../model/dash");
 

const controller = {};
controller.index =  (req, res) => {  
    
        dash.getPorMes(req.con, function(err, pormes) {
                res.render("dash/dash", { 
                    data: pormes,moment:moment 
                })

            }) 

};
module.exports = controller;