const mongoose = require('mongoose');
require('dotenv').config();   

mongoose.Promise = global.Promise
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true})
    .then(() => {
        console.log('La conexión a mongodb se realizo correctamente')
    })
    .catch((error) => console.log(`${error} did not connect`));


// funcionan como middlewere para conectar db
// const MongoClient = require('mongodb').MongoClient;
// var assert = require('assert')
// const url = "mongodb+srv://30725507sm:<30725507sm>@cluster0.nczfs.mongodb.net/"

// MongoClient.connect(url, function (err, client) {
//     assert.equal(null, err)
//     console.log('conectado a la base de datos')
// })