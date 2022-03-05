import { Component, OnInit } from '@angular/core';
import {TodoService} from "../services/todo.service";
import {Todo} from "../model/todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  todo = new Todo();
  constructor(
    private todoService: TodoService
  ) { }
  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }
}
