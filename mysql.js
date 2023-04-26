const mysql = require('mysql2');

const conection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "pruebajs"
})

conection.connect((err) => {
    if (err){
    console.log("Conecxion errada");
    var sql= "INSERT INTO customers(name,address) values ('company Inc', 'highway 37')";
    conection.query(sql, function (err, result){
        console.log("1 record inserted");
    })
}
else{
    console.log("conexiom exitosa");
}
}
)

conection.query("select *from alumnos",(err,result) =>{
if(err) throw err
console.log("los datos de latablas son");
console.log(result)
})

conection.end()