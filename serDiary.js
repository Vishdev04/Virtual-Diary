//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("Public"));

var diaryEntry = [
  ['First Diary entry',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],

  ['The day that Happened',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],

  ['It was a wonderful Sunday!',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
];

app.get("/", function(req, res){
  res.render('Contents/home', {diaryCnt : diaryEntry});
});

app.get("/about", function(req, res){
  res.render('Contents/about');
});

app.get("/contact", function(req, res){
  res.render('Contents/contact');
});

app.get("/entry\*", function(req, res){
  res.render('Contents/entry', {entry : diaryEntry[req.query.id]});
});

app.get("/compose", function(req, res){
  res.render('Contents/compose');
});

app.post("/diaryEntry", function(req, res) {
  var entry = [req.body.title, req.body.entry];
  diaryEntry.push(entry);

  res.redirect("/")
});

app.listen(3300, function(){
  console.log("Server Started at Port:3300. \nOpen your Browsrer & Enter url : localhost:3300");
});
