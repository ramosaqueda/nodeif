const ActiveDirectory = require('activedirectory');
const mauth = require('../model/auth');
const controller = {};
  controller.index =  (req, res) => {     
                let message= '';
                res.render("auth/login", { 
                    message: message                 
               }) 

};


controller.valida = (req, res) => {     
    let message= '';
    let post  = req.body;
    
                //configuracion del LDAP
                var config = {
                    //ldap://host:port/DN?attributes?scope?filter?extensions
                    url: 'ldap://172.18.1.7:389',
                    baseDN: 'OU=Usuarios,DC=minpublico,DC=cl'
                };
                
                var ad = new ActiveDirectory(config);

                var username= post.user+'@minpublico.cl';
                var password= post.password;
                
                //delete req.session.user_data;
                 

                // Authenticate
                ad.authenticate(username, password, function(err, auth) {
                    if (err) {                        
                         req.flash("error_msg", "Error de Autenticación: "+(err));                         
                         res.redirect("/")

                    }
                    if (auth) {
                        
                       



                       
                        mauth.valida_adm(req.con, req.body, function(err,row_user) {                               
                            
                            if (err){  
                                console.log('hola');                                                           
                                req.flash("success_msg", "Acceso solo lectura");                                                     
                                res.render("dash")
                            }else{
                                req.flash("success_msg", "Acceso Adminstración"); 
                                let nombre =  row_user[0].name;  
                                let correo =  row_user[0].email;      
                                req.session.user_data={ nombre, correo};                                
                                user =  req.session.user_data ;
                                res.render("dash/dash", { 
                                     user
                                })
                            }
                            
                          })
                          
                    }
                    else {
                        req.flash("error_msg", "Error de autenticación: "+JSON.stringify(err));
                        //res.redirect("/")
                    }
                });

                 
                
};
module.exports = controller;


