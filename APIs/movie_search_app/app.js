var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/results", function(req,res){
	request("http://omdbapi.com/?s=avengers&apikey=thewdb", function(error, response, body){
		if(!error && res.statusCode == 200){
			var data = JSON.parse(body);
			res.render("results", {data: data});
		}
	});
});

app.listen(process.env.PORT || 3000, process.env.IP, function() {
	console.log("Movie Server listening from 3000");
});