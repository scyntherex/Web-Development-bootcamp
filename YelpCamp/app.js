var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds =[
		{name: "Sequoia", image: "https://www.nps.gov/seki/planyourvisit/images/GG_dorst-102_1.jpg"},
		{name: "Grand Canyon", image: "https://c8.alamy.com/comp/DC9TYF/grand-canyon-national-park-arizona-usa-camping-along-the-colorado-DC9TYF.jpg"},
		{name: "High Hrothgar", image: "https://vignette.wikia.nocookie.net/elderscrolls/images/b/b1/Adventurers_Campsite.png/revision/latest?cb=20121123194546"}
	]

app.get("/", function(req, res){
	res.render("landing")
});

app.get("/campgrounds", function(req, res) {
	res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
	//get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	campgrounds.push(newCampground);
	//redirect to campgrounds page
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
})

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("YelpCamp server running...");
});