var mongoose = require('mongoose')
var schema = mongoose.Schema

var userSchema = new schema({
    name :{type :String , required : true} ,
    age : Number ,
    email : String ,
    bio : String
})

module.exports = mongoose.model("User" , userSchema)