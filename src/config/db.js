
const mysql = require("mysql")

require("dotenv").config()

var  connection;
function handleDisconnect() {
	 connection = mysql.createConnection({
	 	 host: process.env.DB_HOST,
 		 user: process.env.DB_USER,
		 password: process.env.DB_PASS,
		 database: process.env.DB_NAME});

	connection.connect(function(err) {
	if (err) {
		console.log("error en conección a BD");
		setTimeout(hadleDisconnect,2000);
	}

	});

	connection.on('error', function(err) {
		console.log('db error'. err);
		if(err.code =='PROTOCOL_CONNECTION_LOST') {
			handleDisconnnect();
		
		}
		else{
			throw err;
		}
	});
}

handleDisconnect();
module.exports=connection;
