var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("users", {
    student: { name: "rahul", email: "akash@altcampus.io" },
  });
});

router.get("/new", (req, res) => {
  res.render("userForm");
});

router.post("/id", (req, res) => {
  console.log(req.body);

   res.render("singleUser" ,{userData:req.body});
  // res.send(req.body)
 // res.send(req.body);
});

module.exports = router;
