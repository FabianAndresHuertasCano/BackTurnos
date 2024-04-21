import mysql from 'mysql'

let conexion = mysql.createConnection({
    host: "db-appgestionturnos.c1y6m4m2qf1v.us-east-1.rds.amazonaws.com",
    database: "db_users",
    user: "grupo03",
    password: "12345678"
})

conexion.connect((err) =>{
    if (err) {
        console.log("Error when conencting to a database" + err)
    }
    else{
        console.log("Succesfull connection")
    }
    
})

export function insert_record_users(user){
    return new Promise((resolve, reject) => {
        conexion.query("INSERT INTO users (name, document, email) VALUES ('" + user.name + "', '" + user.document + "', '" + user.email + "')", function(err, result){
            if (err) {
                console.log(err);
                reject(err.message);
            } else {
                console.log('Creación de usuario correcta');
                resolve('Creación de usuario correcta');
            }
        });
    });
}

export function consult_record_users(id){
    let query;
    if(id){
        query= "SELECT * FROM users WHERE id = " + id;
    }
    else{
        query= "SELECT * FROM users"
    }
    return new Promise((resolve, reject) => {
        conexion.query(query, function(err, rows) {
            if (err) {
                console.log(err);
                reject('Error al consultar usuarios');
            } else {
                console.log('Consulta exitosa');
                resolve(rows);
            }
        });
    });
}

export function insert_record_activity(activity){
    return new Promise((resolve, reject) => {
        conexion.query("INSERT INTO activity (idUser, name, minutes) VALUES (" + activity.idUser + ", '" + activity.name + "', " + activity.minutes + ")", function(err, result){
            if (err) {
                console. log(err)
                reject('Error al insertar actividad');
            }
            else{
                console.log('Actividad insertada exitosamente');
                resolve('Actividad insertada correctamente');
            }
        })
    });
}

export function consult_record_activity(id,type){
    let query;
    if(type == 'byId'){
        query = "SELECT * FROM activity WHERE id = " + id;
    }
    else{
        query = "SELECT * FROM activity WHERE idUser = " + id;
    }
    console.log(query)
    return new Promise((resolve, reject) => {
        conexion.query(query, function(err, rows) {
            if (err) {
                console.log(err);
                reject('Error al consultar actividad');
            } else {
                console.log('Consulta exitosa');
                resolve(rows);
            }
        });
    });
}