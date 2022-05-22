const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'rent_the_thing'
});

connection.connect((error) => {
    if(error){
        console.log('database connection fail');
    }
});

module.exports = connection;