var express = require('express')
var path = require('path')
var app = express();

//setup view engine 
app.set('view engine' ,'ejs')
app.set('views' ,path.join(__dirname ,"views"))

//middleware
app.use('/students' ,require('./routes/students'))

app.listen(7000 ,() =>{
    console.log('server listionin on port 7k')
})