/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { TodosComponent } from './todos.component';
import {TodoService} from "./todo.service";

describe('Component: Todos', () => {
  it('should create an instance', () => {
    let _todoService = new TodoService();
    let component = new TodosComponent(_todoService);
    expect(component).toBeTruthy();
  });
});
