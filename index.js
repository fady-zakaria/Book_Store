const express =require ("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
let alert = require('alert'); 
const cors=require('cors');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(express.static('views'));
app.set('view engine','pug');
app.set('views','views');
app.use(cors());
mongoose.connect('mongodb://localhost/bookstoreDB', {useNewUrlParser: true, useUnifiedTopology: true});
const db =mongoose.connection

let books=[]; 

db.on('error',function(err){
    console.log(err)
});

db.on('open',function(){
    console.log('Connection established .....');

    app.listen(3000,function(){
        console.log("Server running on port 3000");
    });
});

const booksSchema = new mongoose.Schema({
    book_name:String,
    author_name:String,
    cover:String,
    price:Number,
    category:String,
    inCart:Boolean
})

const Book=mongoose.model('Book',booksSchema);

app.get("/admin",function(req,res){

    res.render('pass');

});

 app.post("/pass",function(req,res){
    let pass=req.body.password;
    if(pass=='1234'){
        alert('password is correct');
        res.redirect('/addview');
    }
    else{
        alert('password is incorrect');
    }
 });

 app.get("/addview",function(req,res){

    res.render('book');

});

app.post("/add",function(req,res){
    let bookname=req.body.book_name;
    let authorname=req.body.author_name;
    let image=req.body.img;
    let bookprice=req.body.price;
    let bookcategory=req.body.category;
    const newbook= new Book({
        book_name:bookname,
        author_name:authorname,
        cover:image,
        price:bookprice,
        category:bookcategory,
        inCart:false
    })
    console.log(Book);
    // Book.deleteOne({book_name:"fady"});
    newbook.save(function(err, result) {
        if (err) {
            console.log(err)
        }
        else{
        console.log(Book);
        res.redirect('/admin')
        }
    })    
    // books.push(book);
    // console.log(books);
    // res.redirect('/');

});

app.get("/books",function(req,res){
    Book.find(function(err,books){
        if(err){
            console.log(err)
        }
        else{
            res.send(books);
        }
    });
    

});