var express = require('express');
var User = require('../modals/_user')
var router = express.Router();

router.get('/new' ,(req ,res) =>{
    res.render('userForm')
})

//create operations
router.post('/' ,(req ,res ,next) =>{
  console.log(req.body)
  User.create(req.body ,(err ,createUser) => {
     // console.log(err ,createUser)
     if(err) return next(err)
     res.redirect('/users')
  })
  //console.log(req.body)
})

// read operations
router.get('/',(req ,res,next) =>{
  User.find({},(err ,users) => {
    if(err) return next(err)
    res.render('users',{users :users})
  })
})

router.get('/:id' ,(req ,res ,next) => {
  id = req.params.id;
  User.findById(id ,(err ,singleuser) => {
    if(err) return next(err)
    res.render('singleUser' ,{singleuser : singleuser}) 
  })
})


//edit operations
router.get('/:id/edit' ,(req ,res ,next) => {
  var id = req.params.id;
  User.findById(id ,(err ,userData) => {
    if(err) return next(err)
    res.render('edituserForm' ,{userData : userData}) 
  })
})

router.post('/:id' ,(req ,res ,next) => {
  var id = req.params.id;
  console.log(id)
  User.findByIdAndUpdate(id , req.body,(err ,updateuserData) => {
    console.log(updateuserData)
    if(err) return next(err)
    res.redirect('/users/' + id) 
  })
})

router.get('/:id/delete' ,(req ,res ,next) => {
  var id = req.params.id;
  console.log(id)
  User.findByIdAndDelete(id ,(err ,deleteuser) => {
    console.log(deleteuser)
    if(err) return next(err)
    res.redirect('/users/') 
  })
})

module.exports = router;