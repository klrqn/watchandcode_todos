// version 1

var todos = ['1', '2', 3, 4, 5];

todos.push('6');
todos.splice(0, 1);

// TODOs for todo list:
// v2
// display items
// add items
// change items
// delete items
var listOfTodos = [1,2,3,4,5];

function displayTodos() {
	console.log('my Todos: ', listOfTodos);
}

displayTodos();

function addTodo(todo) {
	console.log(`executing addTodo(${todo})...`);
	listOfTodos.push(todo);
	displayTodos();
}

addTodo(6);

function changeTodo(oldTodo, newTodo) {
	for (var i=0; i<listOfTodos.length; i++) {
		if (listOfTodos[i] == oldTodo) {
			listOfTodos[i] = newTodo;
		}
	}
	displayTodos();
}

changeTodo(6, 7);