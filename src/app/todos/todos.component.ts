import { Component, OnInit } from '@angular/core';
import {TodoService} from "./todo.service";

@Component({
  moduleId: module.id,
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  oldId;
  appState = 'default';
  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.todos = this._todoService.getTodos();
  }

  addTodo() {
    if(this.text !==null && this.text.trim() !=="") {
      var newTodo = {id:'id'+this.todos.length+1, text: this.text};
      this.todos.push(newTodo);
      this._todoService.addTodo(newTodo);
    }
    this.text=null;
  }

  deleteTodo(id) {
    this.text=null;
    for(var i=0; i<this.todos.length; i++) {
      if(id === this.todos[i].id) {
        this.todos.splice(i, 1);
      }
    }
    this._todoService.deleteTodo(id);
  }

  editTodo(todo) {
    this.appState = 'edit';
    this.oldId = todo.id;
    this.text = todo.text;
  }

  updateTodo() {
    for(var i=0; i<this.todos.length; i++) {
      if(this.oldId === this.todos[i].id) {
        this.todos[i].text = this.text;
      }
    }
    this._todoService.updateTodo(this.oldId, this.text);
    this.text=null;
    this.oldId = null;
    this.appState = 'default';
  }
}
