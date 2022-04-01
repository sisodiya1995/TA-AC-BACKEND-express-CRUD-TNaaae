var express = require('express');
var path = require('path')
var app = express();

//setup view engine
app.set("view engine" ,"ejs")
app.set("views" ,path.join(__dirname ,"views"))


app.get('/',(req ,res) =>{
    res.render('index')
})
app.listen(8000 ,() => {
    console.log('server listion on port 8k')
})