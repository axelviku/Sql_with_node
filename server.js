const express = require('express');
const db = require('./models/index');
var bodyParser = require('body-parser')
const router = require('./router')
const port = 3003;
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(router)
const d = new Date();
let month = d.getMonth();
let day = d.getDay();
let datee = d.getDate()

var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

console.log( daylist[day],datee,monthNames[month],d);

app.listen(port,()=>{
console.log(`Server is listen on port ${port}`);
db.sequelize.sync();
})