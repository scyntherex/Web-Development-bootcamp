var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("index");
	//res.send("<h1>Home PAGE</h1>");
});

app.get("/fallinlovewith/:thing", function(req, res){
	var thing = req.params.thing;
	res.render("love", {thingVar: thing});
})

app.get("/posts", function(req, res){
	var posts = [
		{title: "Avatar", author: "James Cameron"},
		{title: "Titanic", author: "James Cameron"},
		{title: "Avenger", author: "Kevin Feige"},
	];
	
	res.render("posts", {posts: posts});
})

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Server is listening.");
})