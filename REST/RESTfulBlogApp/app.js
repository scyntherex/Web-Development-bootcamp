var express 	= require("express"),
app 			= express(),
bodyParser 		= require("body-parser"),
mongoose 		= require("mongoose");

//APP CONFIG
mongoose.connect("mongodb://localhost:27017/restful_blog_app", { useNewUrlParser: true, useUnifiedTopology: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//MODEL/MONGOOSE CONFIG
var blogSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String,
	created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

//RESTFUL ROUTES
app.get("/", function(req, res){
	res.redirect("/blogs");
});
app.get("/blogs", function(req, res){
	Blog.find({}, function(err, blogs){
		if(err){
			console.log("ERRRRRORRRR");
		} else {
			res.render("index", {blogs: blogs});
		}
	})
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Blog app server running...");
})