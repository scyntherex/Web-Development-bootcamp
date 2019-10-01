var express = require("express");
var app = express();

// "/" => "Hello!"
app.get("/", function(req, res) {
	res.send("Hi there!");
});

app.get("/speak/:animal", function(req, res) {
	var sounds = {
		pig: "Oink",
		cow: "Moo",
		cat: "Meow"
	}
	var animal = req.params.animal.toLowerCase();
	var sound = sounds[animal];
	res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:message/:times", function(req, res) {
	var message = req.params.message;
	var times = Number(req.params.times);
	var result = "";
	for(var i = 0; i < times; i++) {
		result += message + " ";
	}
	res.send(result);
})

app.get("*", function(req, res){
	res.send("YOU ARE A STAR!!!");
});

//Tell express to listen for requests.
app.listen(process.env.PORT || 3000, process.env.IP, function() {
	console.log("Server listening from 3000");
});