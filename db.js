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

export function insert_record_users(id, name, document, email){
    conexion.query("INSERT INTO users VALUES (" + id + ", '" + name + "', '" + document + "', '" + email + "',)", function(err, result){
        if (err) {
            console. log(err)
        }
        else{
            console. log("succesful registration")
        }
    })
}

export function consult_record_users(id, name, document, email){
    conexion.query("SELECT * FROM users VALUES (" + id + ", '" + name + "', '" + document + "', '" + email + "',)", function(err, result){
        if (err) {
            console. log(err)
        }
        else{
            console. log("succesful query")
        }
    })
}

export function insert_record_activity(id, idUser, name, minutes){
    conexion.query("INSERT INTO activity VALUES (" + id + ", '" + idUser + "', '" + name + "', '" + minutes + "',)", function(err, result){
        if (err) {
            console. log(err)
        }
        else{
            console. log("succesful registration")
        }
    })
}

export function consult_record_activity(id, idUser, name, minutes){
    conexion.query("SELECT * FROM activity VALUES (" + id + ", '" + idUser + "', '" + name + "', '" + minutes + "',)", function(err, result){
        if (err) {
            console. log(err)
        }
        else{
            console. log("succesful query")
        }
    })
}