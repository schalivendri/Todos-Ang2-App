import { Injectable } from '@angular/core';
import {Init} from "../init-todos";

@Injectable()
export class TodoService extends Init{

  constructor() {
    super();
    this.load();
    
  }

  getTodos(){
    var todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }

  addTodo(newTodo){
    if(newTodo.text != "") {
      var todos = JSON.parse(localStorage.getItem('todos'));
      todos.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }

  deleteTodo(id) {
    var todos = JSON.parse(localStorage.getItem('todos'));
    for(var i=0; i<todos.length; i++) {
      if(id === todos[i].id) {
        todos.splice(i, 1);
      }
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  updateTodo(id, newText) {
    var todos = JSON.parse(localStorage.getItem('todos'));
    for(var i=0; i<todos.length; i++) {
      if(id === todos[i].id) {
        todos[i].text = newText;
      }
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
