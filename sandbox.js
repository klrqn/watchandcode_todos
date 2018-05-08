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

// this is mine
function mychangeTodo(oldTodo, newTodo) {
	for (var i=0; i<listOfTodos.length; i++) {
		if (listOfTodos[i] == oldTodo) {
			listOfTodos[i] = newTodo;
		}
	}
	displayTodos();
}

mychangeTodo(6, 7);

// this is from the walkthrough
function changeTodo(index, val) {
	listOfTodos[index] = val;
	displayTodos();
}

changeTodo(2, 100);

function deleteTodo(index) {
	console.log(`executing deleteTodo(${index})`);
	listOfTodos.splice(index, 1);
	displayTodos();
}

deleteTodo(2);

// version 3
// Code goes here

// stores todo array on an object.
var todoList = {
  todos: [1, 2, 3, 4, 5],

  // display todolist
  display: function() {
    console.log(this.todos);
  },

  add: function(todo) {
    this.todos.push(todo);
    this.display();
  },

  change: function(position, newvalue) {
    this.todos[position] = newvalue;
    this.display();
  },

  delete: function(position) {
    this.todos.splice(position, 1);
    this.display();
  }
};
