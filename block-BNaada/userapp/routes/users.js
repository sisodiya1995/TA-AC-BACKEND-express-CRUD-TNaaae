var express = require('express');
var User = require('../modals/_user')
var router = express.Router();

router.get('/new' ,(req ,res) =>{
    res.render('userForm')
})
//create operations
router.post('/' ,(req ,res ,next) =>{
  User.create(req.body ,(err ,createUser) => {
     // console.log(err ,createUser)
     if(err) return next(err)
     res.redirect('/users/new')
  })
  //console.log(req.body)
})

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

module.exports = router;