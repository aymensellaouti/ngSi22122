import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TodoService} from "../../todo/services/todo.service";

@Component({
  selector: 'app-test-http',
  templateUrl: './test-http.component.html',
  styleUrls: ['./test-http.component.css']
})
export class TestHttpComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodoFromApi().subscribe({
      next: (todos) => {
        console.log(todos);
      }
    });
    const todo = {
      completed: false,
      title: "new Todo from Fakhri",
      userId: 1
    }
    this.todoService.addTodoWithApi(todo).subscribe({
      next: (reponse) => {
        console.log('Post Request', reponse);
      }
    })
  }

}
