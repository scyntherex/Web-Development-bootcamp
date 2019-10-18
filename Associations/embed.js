var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo", { useNewUrlParser: true, useUnifiedTopology: true });

//POST - title, content
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});
var Post = mongoose.model("Post", postSchema);

//USER - email, name
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

/*var newUser = new User({
	email: "hermione@Hogwarts.edu",
	name: "Hermione Granger"
});

newUser.posts.push({
	title: "How to brew Poljuice Potion",
	content: "JK. Go to Potions class RON!"
});
newUser.save(function(err, user){
	if(err){
		console.log(err);
	} else {
		console.log(user);
	}
});
*/
/*var newPost = new Post({
	title: "Reflections on Apples",
	content: "They are delicious"
});

newPost.save(function(err, post){
	if(err){
		console.log(err);
	} else {
		console.log(post);
	}
});*/

User.findOne({name: "Hermione Granger"}, function(err, user){
	if(err){
		//console.log(err);
	} else {
		user.posts.push({
			title: "3 things I hate",
			content: "Purebloods, Ron's stupidity, Deatheaters"
		});
		user.save(function(err, user){
			if(err){
				console.log(err);
			} else {
				console.log(user);
			}
		});
	}
});