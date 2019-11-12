var express 	= require("express"),
	app 		= express(),
	bodyParser 	= require("body-parser"),
	mongoose 	= require("mongoose"),
	passport	= require("passport"),
	LocalStrategy = require("passport-local"),
	Campground  = require("./models/campground"),
	Comment		= require("./models/comment"),
	User		= require("./models/user"),
	seedDB		= require("./seeds");

//requiring routes
var campgroundRoutes = require("./routes/campgrounds"),
	commentRoutes	 = require("./routes/comments"),
	indexRoutes		 = require("./routes/index");

mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
//seedDB(); //seed the databse

//PASSPORT CONFIG
app.use(require("express-session")({
	secret: "In a hole in the ground there lived a hobbit.",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("YelpCamp server running...");
});