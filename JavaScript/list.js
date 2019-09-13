var todos = ["Feed cats", "Clean Litter Box"];

var input = prompt("What to do?");

while (input !== "quit") {
	if(input === "list") {
		listTodos();
	} else if(input === "new") {
		addTodo();
	} else if(input === "delete") {
		removeTodo();
	}
	input = prompt("What to do?");

}
console.log("Quitted app.");

function listTodos() {
	todos.forEach(function(todo, i) {
			console.log(i + ": " + todo);
	})
}

function addTodo() {
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
	console.log("Added item to list.");
}

function removeTodo() {
	var index = prompt("Enter index of th elist to delete.");
	todos.splice(index, 1);
	console.log("Removed item from list.");
}