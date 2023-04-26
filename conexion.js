const mysql = require('mysql2');

const conection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "ConexionJS"
});

/* conection.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conection.threadId);
});
 */
/* conection.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE empleados (id int not null, name VARCHAR(255), city VARCHAR(255))";
    conection.query(sql, function (err, result) {
    if (err) throw err;
        console.log("Table created");
    });
}); */

conection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO empleados (id, name, city) VALUES (2, 'Emily', 'Mompox')";
    conection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});

conection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "select * from empleados";
    conection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});