const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {


    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.h7bgx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    

    mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('mongodb connected');    
    })
    .catch(err => console.log(err.message))

    // mongoose.connection
    // .on("open", () => console.log("Bağlantı başarıyla sağlanmıştır..."))
    // .on("error", (error) => console.log("Bağlantı oluşturulamadı.", error.message));

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ', error.message);
    })
}

module.exports = Connection;