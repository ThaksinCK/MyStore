const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://127.0.0.1:27017/myStore');

const itemSchema = new mongoose.Schema({
    itemId : String,
    itemName : String,
    price : Number,
    quantity : Number
});
const Item = mongoose.model("Items", itemSchema);

const port = 3000;

app.get('/', (req, res)=>{
    res.render('home');
})

app.get('/home', (req, res)=>{
    res.render('home');
})

app.get('/db', (req, res)=>{
    var itemList = [];
    Item.find({}).exec()
    .then(documents => {
    itemList = documents;
    res.render('db', {'items' : itemList});
    })
    .catch(err => {
    console.error(err);
    });
    })

app.post('/db', (req, res)=>{
    const itemId = req.body.itemId;
    const itemName = req.body.itemName;
    const price = req.body.price;
    const quantity = req.body.quantity;

    const newItemData = new Item({
        itemId : itemId,
        itemName : itemName,
        price : price,
        quantity : quantity
    });

    newItemData.save();

    console.log(`${itemId} ${itemName} ${price} ${quantity}`);
    
    res.redirect('/db');
})

app.listen(port, function(){
    console.log(`server started at port: ${port}`)
});