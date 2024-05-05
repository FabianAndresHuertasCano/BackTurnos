import ex from 'express';
import cors from 'cors';
import path from 'path'
import { User } from './models/User.js';
import { Activity } from './models/Activity.js';
import * as db from './db.js';

const app = ex();
const dir = path.resolve();

app.use(cors());
app.use(ex.json());
app.use(ex.static('front/build'));

app.listen('8080', function(){
    console.log("Server started")
})

app.get('/', function(req,res){
    res.sendFile(dir + '/index.html');
})

app.get('/user', function(req,res){
    db.consult_record_users()
    .then(rows => {
        res.json(rows); // Los resultados en formato JSON
    })
    .catch(error => {
        console.error(error)
        res.status(500).json({ ok: true, message: error });// Mensaje de error si la consulta falló
    });
})

app.get('/userById', function(req,res){
    db.consult_record_users(req.query.id)
    .then(rows => {
        res.json(rows[0]); // Los resultados en formato JSON
    })
    .catch(error => {
        console.error(error)
        res.status(500).json({ ok: true, message: error });// Mensaje de error si la consulta falló
    });
})

app.post('/user', function(req, res){
    let user = new User(0,req.body.name,req.body.document,req.body.email);
    //Crear usuario en base de datos
    db.insert_record_users(user).then(result => {
        res.status(200).json({ ok: true, message: result});
    })
    .catch(error => {
        console.error(error)
        res.status(500).json({ ok: true, message: error });
    });
    
})

app.put('/user', function(req, res){
    new User(req.body.id,req.body.name,req.body.document,req.email);
    //Actualizar usuario en base de datos

    res.status(200).json({ ok: true, message: 'Usuario actualizado exitosamente' });
})

app.get('/activity', function(req,res){
    db.consult_record_activity(req.query.id,"byUser")
    .then(rows => {
        res.json(rows); // Los resultados en formato JSON
    })
    .catch(error => {
        console.error(error)
        res.status(500).json({ ok: true, message: error });// Mensaje de error si la consulta falló
    });
})
app.get('/activityById', function(req,res){
    db.consult_record_activity(req.query.id,"byId")
    .then(rows => {
        res.json(rows[0]); // Los resultados en formato JSON
    })
    .catch(error => {
        console.error(error)
        res.status(500).json({ ok: true, message: error });// Mensaje de error si la consulta falló
    });
})
app.post('/activity', function(req, res){
    let activity = new Activity(0,req.body.idUser,req.body.name,req.body.minutes);
    //Crear actividad en base de datos
    db.insert_record_activity(activity).then(result => {
        res.status(200).json({ ok: true, message: result});
    })
    .catch(error => {
        console.error(error)
        res.status(500).json({ ok: true, message: error });
    });
})

app.put('/activity', function(req, res){
    new Activity(req.body.id,req.body.idUser,req.body.name,req.minutes);
    //Actualizar actividad en base de datos

    res.status(200).json({ ok: true, message: 'Actividad actualizada exitosamente' });
})