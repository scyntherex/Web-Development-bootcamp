# RESTful Routing

### Cheatsheet to the 7 REST menthods

![Image of cheatsheet](https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile8.uf.tistory.com%2Fimage%2F99AF92425BCAFC531AEF37)

# Databases

### SQL(relational) vs NoSQL(non-relational)
+ SQL is tabular and flat. Needs multiple tables to relate data. It is not flexible; you have to follow a pattern.
+ Non-relational can be nested. No unique IDs needed. It's flexible. No patterns to follow.
+ SQL doess not necessarily mean it's better. Some situations are better with tables and some are not.

# Node.js

### Intro
+ What can Node.js do? Scripting language that can be used client AND server side.
+ Why use it? 
+ 1.) It's popular (not the important reason)
+ 2.) High-performance
+ 3.) Javascript based; making it easy to learn.

### NPM
+ Node package manager
+ Can easily install libraries that are already made. Less coding


# JQuery

### CDN 2.1.4 (not the latest ver.)
+ "https://cdn.js.cloudflare.com/ajax/libs/jquery/2.1.4/"


# JavaScript Notes

### 5 Primitives
+ Numbers
+ Strings
+ Booleans
+ Null
+ Undefined

### Variables
+ Containers that store values (data).
+ Ex: var youVariableName = youValue;
+ JavaScript has dynamic typing, unlike other languages.
+ Ex: String can change to numbers.

### 3 useful methods
+ alert("") - Displays a message as a string.
+ prompt("") - Creates an input to store variables.
+ console.log("") - Prints message in the Javascript console.
+ other methods (clear())

### Comparison operators
+ >, >=, <, <=, ==, !=, === (type coersion), !== (type coersion)
+ Ex: 1 === 1, 1 == "1" (in JS)
+ true == 1 -> true
+ 0 == false -> true
+ null == undefined -> true
+ NaN == NaN -> false


### Logical Operators
+ &&, ||, !
+ Ex: !(x===y) -> true assuming x = 5 and y = 9

### Conditionals
+ if, else if, else

### Arrays
+ ForEach loop takes a function as an argument
+ calls the function FOR EACH elements in the array.
+ Example below
+ var colors = [red, org, ylw, grn]
+ printColor(**color argument**) {console.log(**color argument**)}
+ colors.forEach(printColor) is the same as for(var i = 0; i < colors.length; i++) {printColor(colors[i])};
