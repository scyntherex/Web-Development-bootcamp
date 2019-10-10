var mongoose = require("mongoose");
//Notice below how to connect to avoid deprecation
mongoose.connect("mongodb://localhost/cat_app", { useNewUrlParser: true, useUnifiedTopology: true });

var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding new cat to DB

/*var george = new Cat({
	name: "Mrs. Norris",
	age: 7,
	temperament: "Evil"
});

george.save(function(err, cat){
	if(err){
		console.log("SOMETHING WENT WRONG");
	} else {
		console.log("SAVED CAT TO DB.");
		console.log(cat);
	}
});*/

Cat.create({
	name: "Salt",
	age: 15,
	temperament: "Sweet"
}, function(err, cat){
	if(err){
		console.log(err);
	} else {
		console.log(cat);
	}
});

//retrieve all cats from the DB and console.log them

Cat.find({}, function(err, cats){
	if(err){
		console.log("ERRRROR");
		console.log(err);
	} else {
		console.log("The Cats are:")
		console.log(cats);
	}
});