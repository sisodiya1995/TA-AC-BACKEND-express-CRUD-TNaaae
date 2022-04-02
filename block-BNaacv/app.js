var express = require("express");
var app = express();
var path = require("path");

//setup views engines
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//middleware
app.use(express.urlencoded({ extended: false }));
var userRouter = require("./routes/users");
app.use("/users", userRouter);

app.use(express.json());

app.listen(4000, () => {
  console.log("server listion on port 4k");
});
