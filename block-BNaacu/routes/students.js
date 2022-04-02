var express = require('express');
var router = express.Router();

router.get('/new' , (req ,res) => {
  res.send('hello')
  
})

router.get('/' , (req ,res) => {
    res.render("index", { list: ["ankit", "suraj", "prashant", "ravi"] });
    
  })

  router.get('/id' , (req ,res) => {
  //var id = req.params.id
    res.render("student", { student: { name: "rahul", email: "rahul@altcampus.io" }});
    
  })

router.post('/students' , (req ,res) => {
    res.send('hello student')
    
  })


module.exports = router;