const express = require('express'),
path = require('path'); 
morgan = require('morgan');
mysql = require('mysql');
myConnection = require('express-myconnection');
var methodOverride = require("method-override");
const session = require('express-session');
const flash = require('connect-flash');
const con = require("./config/db.js");


const app = express();


//importar routes
//const rutas = require('./routes/rutas');
const peritosRouter = require("./routes/peritosRouter")
const peritajesRouter = require("./routes/peritajesRouter")
const dashRouter = require("./routes/dashRouter")
 

//setings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views') ); 
app.use(methodOverride("_method"));
 

app.use(session({ cookie: { maxAge: 60000 }, 
  secret: 'woot',
  resave: false, 
  saveUninitialized: false}));



// middlewares
app.use(morgan('dev'));
app.use(flash());


// Global Variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  // res.locals.user = req.user || null;
  next();
});


app.use(myConnection(mysql, {
  host: '172.17.25.122',
  user: 'root',
  password: 'inffr4',
  port: 3306,
  database: 'pericias'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// connecting route to database
app.use(function(req, res, next) {
  req.con = con
  next()
})

 


//routes
//app.use('/', rutas);
app.use("/peritos", peritosRouter);
app.use("/peritajes", peritajesRouter);
app.use("/dash", dashRouter);
//static files

app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});

//Exporto mi instancia de app para utilizarlo en otros archivos
module.exports = app;

