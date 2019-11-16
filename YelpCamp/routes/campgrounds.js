var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");

//INDEX
router.get("/", function(req, res) {
	//Get all campgrounds from DB
	Campground.find({}, function(err, allCampgrounds) {
		if(err){
			console.log(err);
		} else {
			res.render("campgrounds/index", {campgrounds: allCampgrounds});
		}
	});
});

//CREATE
router.post("/", isLoggedIn, function(req, res){
	//get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var author = {
		id: req.user._id,
		username: req.user.username
	}
	var newCampground = {name: name, image: image, description: desc, author: author};
	//Create a new campground to save on database
	Campground.create(newCampground, function(err, newlyAdded) {
		if(err) {
			console.log(err)
		} else {
			//redirect to campgrounds page
			//console.log(newlyAdded);
			res.redirect("/campgrounds");
		}
	});
});

//NEW
router.get("/new", isLoggedIn, function(req, res){
	res.render("campgrounds/new");
});

//SHOW
router.get("/:id", function(req, res){
	//find the campground with provided ID
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
		if(err){
			console.log(err);
		} else {
			//render show template wit that campground
	res.render("campgrounds/show", {campground:foundCampground});
		}
	});
});

//EDIT CAMPGROUND
router.get("/:id/edit", function(req, res){
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			res.redirect("/campgrounds");
		} else {
			res.render("campgrounds/edit", {campground: foundCampground});
		}
	});
});

//UPDATE CAMPGROUND
router.put("/:id", function(req, res){
	//find and update the correct campground
	Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground) {
		if(err) {
			res.redirect("/campgrounds");
		} else {
			//redirect somewhere(show page)
			res.redirect("/campgrounds/" + req.params.id);
		}					 
	});
});

//middleware
function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}

module.exports = router;