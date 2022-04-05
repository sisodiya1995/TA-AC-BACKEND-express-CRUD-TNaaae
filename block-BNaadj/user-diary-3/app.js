// requires

var express = require('express');
var app = express();
var mongoose = require('mongoose')
var path = require('path')

//connect to data base

mongoose.connect("mongodb://localhost/userdairy" ,(err) => {
    console.log(err ? err :"Connected to database")
})

//middleware 

 app.use(express.urlencoded({extended : false}))
 app.use(express.json())

 // setup view engine

 app.set("view engine" ,"ejs")
 app.set("views",path.join(__dirname ,"views"))

 var userRouter = require("./routes/users");
app.use("/users", userRouter);

// 404 error

app.use((req ,res ,next) => {
  res.send("Page not found")
})

// client side error

app.use((err,req ,res , next) => {
    res.send(err);
})


app.listen(3000 ,() => {
    console.log("server listion on port 3k")
})