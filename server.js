import ex from 'express';
import cors from 'cors';
import path from 'path'
import { User } from './models/User.js';
import { Activity } from './models/Activity.js';

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
    let users = [];
    users.push(new User(1, 'Juan', '12345678', 'juan@example.com'))
    users.push(new User(2, 'María', '87654321', 'maria@example.com'))
    res.json(users)
})

app.post('/user', function(req, res){
    new User(0,req.body.name,req.body.document,req.email);
    //Crear usuario en base de datos

    res.status(200).json({ ok: true, message: 'Usuario creado exitosamente' });
})

app.put('/user', function(req, res){
    new User(req.body.id,req.body.name,req.body.document,req.email);
    //Actualizar usuario en base de datos

    res.status(200).json({ ok: true, message: 'Usuario actualizado exitosamente' });
})

app.get('/activity', function(req,res){
    let activities = [];
    if(req.query.id == 1){
        activities.push(new Activity(1, 1, 'Actividad 1', 30))
        activities.push(new Activity(2, 1, 'Actividad 2', 45))
    }
    if(req.query.id == 2){
        activities.push(new Activity(3, 2, 'Actividad 1', 45))
        activities.push(new Activity(4, 2, 'Actividad 2', 60))
    }
    res.json(activities)
})
app.get('/activityById', function(req,res){
    if(req.query.id == 1){
        res.json(new Activity(1, 1, 'Actividad 1', 30))
    }
    if(req.query.id == 2){
        res.json(new Activity(2, 1, 'Actividad 2', 45))
    }
    if(req.query.id == 3){
        res.json(new Activity(3, 2, 'Actividad 1', 45))
    }
    if(req.query.id == 4){
        res.json(new Activity(4, 2, 'Actividad 2', 60))
    }
})
app.post('/activity', function(req, res){
    new Activity(0,req.body.idUser,req.body.name,req.minutes);
    //Crear actividad en base de datos

    res.status(200).json({ ok: true, message: 'Actividad creada exitosamente' });
})

app.put('/activity', function(req, res){
    new Activity(req.body.id,req.body.idUser,req.body.name,req.minutes);
    //Actualizar actividad en base de datos

    res.status(200).json({ ok: true, message: 'Actividad actualizada exitosamente' });
})