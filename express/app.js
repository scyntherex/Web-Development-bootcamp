var express = require("express");
var app = express();

// "/" => "Hello!"
app.get("/", function(req, res) {
	res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
	res.send("GOODBYE!");
});

// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
	console.log("Dog was called!");
	res.send("MEOW!");
});

app.get("*", function(req, res){
	res.send("YOU ARE A STAR!!!");
});

//Tell express to listen for requests.
app.listen(process.env.PORT || 3000, process.env.IP, function() {
	console.log("Server listening from 3000");
});