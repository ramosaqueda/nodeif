//const controller = {};
const moment = require('moment');
const dash = require("../model/dash");
 

const controller = {};

controller.index =  (req, res) => {  
    
        
    dash.getPorano(req.con, function(err, porano) {       
       let user =  req.session.user_data ;        
        dash.getPorperito(req.con, function(err, porperito) {                                        
            res.render("dash/dash", { 
                porperito,
                user,
                porano,moment
            })
        
        });
        })

           

          

           

};
module.exports = controller;