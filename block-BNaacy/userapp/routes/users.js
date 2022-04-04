var express = require('express');
var User = require('../modals/_user')
var router = express.Router();

router.get('/new' ,(req ,res) =>{
    res.render('userForm')
})

router.post('/' ,(req ,res ,next) =>{
  User.create(req.body ,(err ,createUser) => {
     // console.log(err ,createUser)
     if(err) return next(err)
     res.redirect('/users/new')
  })
  //console.log(req.body)
})

module.exports = router;