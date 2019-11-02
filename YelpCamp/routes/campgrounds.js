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
router.post("/", function(req, res){
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

//NEW
router.get("/new", function(req, res){
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

module.exports = router;