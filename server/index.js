const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"dbOrtega"
});

app.listen(3001,()=>{
    console.log('Corriendo en el puerto 3001');
})

app.post("/createEst",(req,res)=>{
    const identificacion = req.body.identificacion;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;

    db.query('INSERT INTO dbOrtega.estudiante (est_id, est_nombre, est_apellido) VALUES(?,?,?)',
    [identificacion,nombre,apellido],
    (err,result)=>{
        if(err) console.log(err);
        else {
            res.send("Estudiante registrado");
        }
    });

});