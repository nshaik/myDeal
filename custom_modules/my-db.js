var mysql 		= require('mysql'),
	db 			= null;
module.exports = function () {
    if(!db) {
        db = mysql.createConnection({
            host     : 'localhost',
			user     : 'root',
			password : '',
			database : 'my_store'
        });
	};
	db.insert = function(data){

	};
    return db;
};