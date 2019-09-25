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
