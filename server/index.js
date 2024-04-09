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
    db.query('INSERT INTO dbOrtega.estudiante (est_id, est_nombre, est_apellido, est_estado) VALUES(?,?,?,"Activo")',
    [identificacion,nombre,apellido],
    (err,result)=>{
        if(err) console.log(err);
        else {
            res.send("Estudiante Registrado");
        }
    });

});
app.get("/estudiantes",(req,res)=>{
    db.query('SELECT * from dbOrtega.estudiante',
    (err,result)=>{
        if(err) console.log(err);
        else {
            res.send(result);
        }
    });
});
app.put("/updateEst",(req,res)=>{
    const identificacion = req.body.identificacion;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const estado = req.body.estado;
    db.query('UPDATE dbOrtega.estudiante SET est_nombre=?, est_apellido=?, est_estado=? WHERE (est_id=?)',
    [nombre,apellido,estado,identificacion],
    (err,result)=>{
        if(err) console.log(err);
        else {
            res.send("Estudiante Actualizado");
        }
    });
});
app.delete("/deleteEst/:id",(req,res)=>{
    const identificacion = req.params.id;
    db.query('DELETE from dbOrtega.estudiante  WHERE (est_id=?)',identificacion,
    (err,result)=>{
        if(err) console.log(err);
        else {
            res.send("Estudiante Eliminado");
        }
    })
});