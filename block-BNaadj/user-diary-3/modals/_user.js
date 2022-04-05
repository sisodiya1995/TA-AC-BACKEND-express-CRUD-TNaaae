var mongoose = require('mongoose')
var schema = mongoose.Schema

var userSchema = new schema({
    name :{type :String , required : true} ,
    age : Number ,
    email : {type : String , required : true},
    bio : String,
    address : String ,
    hobbies : [String]
})

module.exports = mongoose.model("User" , userSchema)