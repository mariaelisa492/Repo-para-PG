const mongoose = require('mongoose');
require('dotenv').config();   
// Import constants instead of accessing process.env directly
const { CONNECTION_URL, CONNECTION_URL_DEV, NODE_ENV } = process.env;

mongoose.Promise = global.Promise

// Use an alternative db when testing so we don't pollute the original db
const CONN = NODE_ENV === 'test' ? CONNECTION_URL_DEV : CONNECTION_URL;

mongoose.connect(CONN, { useNewUrlParser: true})
    .then(() => {
        console.log('La conexión a mongodb se realizo correctamente');
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
