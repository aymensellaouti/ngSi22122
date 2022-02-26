import { Injectable } from '@angular/core';
import {Todo} from "../model/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];
  constructor() { }
  getTodos(): Todo[] {}
  logTodos(): void {}
  addTodo(todo: Todo):void {}
  deleteTodo(todo: Todo): void {}

}
