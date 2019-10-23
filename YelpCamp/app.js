var express 	= require("express"),
	app 		= express(),
	bodyParser 	= require("body-parser"),
	mongoose 	= require("mongoose"),
	Campground  = require("./models/campground"),
	seedDB		= require("./seeds");

seedDB();
mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

/*Campground.create({
		name: "High Hrothgar", 
		image: "https://vignette.wikia.nocookie.net/elderscrolls/images/b/b1/Adventurers_Campsite.png/revision/latest?cb=20121123194546",
		description: "This is one of the beautiful yet convenient campsites landmarked throughout Skyrim. High Hrothgar is one of the highest points of elevation in all of Cyrodil."
	}, function(err, campground){
		if(err) {
			console.log(err);
		} else {
			console.log("NEW CAMPGROUND:");
			console.log(campground);
		}
});	*/	

app.get("/", function(req, res){
	res.render("landing")
});

app.get("/campgrounds", function(req, res) {
	//Get all campgrounds from DB
	Campground.find({}, function(err, allCampgrounds) {
		if(err){
			console.log(err);
		} else {
			res.render("index", {campgrounds: allCampgrounds});
		}
	});
});

app.post("/campgrounds", function(req, res){
	//get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var newCampground = {name: name, image: image, description: desc};
	//Create a new campground to save on database
	Campground.create(newCampground, function(err, newlyAdded) {
		if(err) {
			console.log(err)
		} else {
			//redirect to campgrounds page
			res.redirect("/campgrounds");
		}
	});
});

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
});

app.get("/campgrounds/:id", function(req, res){
	//find the campground with provided ID
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log(err);
		} else {
			//render show template wit that campground
	res.render("show", {campground:foundCampground});
		}
	});
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("YelpCamp server running...");
});