const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const Connection = require('./database/db.js');
const Routes = require('./routes/route.js');


const app = express();


app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', Routes);


Connection();


app.listen(3000, () => {
 console.log('Uygulama çalıştırıldı...');
});