var todos = ["Feed cats"];

var input = prompt("What to do?");

while (input !== "quit") {
	if(input === "list") {
		console.log(todos);
	} else if(input === "new") {
		var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
	}

	input = prompt("What to do?");

}
console.log("Quitted app.");