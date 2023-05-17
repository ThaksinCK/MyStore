const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://127.0.0.1:27017/myStore');

const port = 3000;

app.get('/', (req, res)=>{
    res.render('home');
})

app.listen(port, function(){
    console.log(`server started at port: ${port}`)
});