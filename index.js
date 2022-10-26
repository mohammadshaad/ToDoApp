const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

let todos = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// app.set('views','temp'); // if the templates are in the temp folder instead of the views folder 

app.get("/", function (req, res) {
  let options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  let today = new Date();

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", { day: day, todos: todos });
});

app.post("/", function (req, res) {
  let todo = req.body.todo;

  todos.push(todo);

  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});


app.post("/removetask", function (req, res) {
  let deleteTask = req.body.check;
  let deleteBtn = req.body.button; 

  for (let i = 0; i < todos.length; i++)
  {
    if (deleteTask === deleteBtn)
    {
      todos.splice(todos.indexOf(deleteTask), 1);
    }
  }


  res.redirect("/");
});
