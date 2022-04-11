import { Injectable } from '@angular/core';
import {Todo} from "../model/todo";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  constructor(private http: HttpClient) { }
  getTodos(): Todo[] {return this.todos;}
  logTodos(): void {console.log(this.todos);}
  addTodo(todo: Todo):void {this.todos.push(todo);}
  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
  getTodoFromApi(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
  addTodoWithApi(todo: any): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/todos', todo);
  }
}
