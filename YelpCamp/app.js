var express 	= require("express"),
	app 		= express(),
	bodyParser 	= require("body-parser"),
	mongoose 	= require("mongoose"),
	Campground  = require("./models/campground"),
	Comment		= require("./models/comment"),
	seedDB		= require("./seeds");


mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
seedDB();


app.get("/", function(req, res){
	res.render("landing")
});

app.get("/campgrounds", function(req, res) {
	//Get all campgrounds from DB
	Campground.find({}, function(err, allCampgrounds) {
		if(err){
			console.log(err);
		} else {
			res.render("campgrounds/index", {campgrounds: allCampgrounds});
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
	res.render("campgrounds/new");
});

app.get("/campgrounds/:id", function(req, res){
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

//COMMENTS Routes
app.get("/campgrounds/:id/comments/new", function(req, res){
	//find campgrounds by id
	Campground.findById(req.params.id, function(err, campground){
		if(err){
			console.log(err);
		} else {
			res.render("comments/new", {campground: campground});
		}
	})
})

app.post("/campgrounds/:id/comments", function(req, res){
	//lookup campground using ID
	Campground.findById(req.params.id, function(err, campground){
		if(err)	{
			console.log(err);
			res.redirect("/campgrounds");
		} else {
			//create new comment
			Comment.create(req.body.comment, function(err, comment){
				if(err){
					console.log(err);
				} else {
					//connect new comment to campground
					campground.comments.push(comment);
					campground.save();
					//redirect campground showpage
					res.redirect("/campgrounds/" + campground._id);
				}
			})
		}	
	});
})

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("YelpCamp server running...");
});