import { Component, OnInit } from '@angular/core';
import {Cv} from "../model/cv";
import {LoggerService} from "../../services/logger.service";
import {SayHelloService} from "../../services/say-hello.service";
import {TodoService} from "../../todo/services/todo.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedCv : Cv | null = null;
  date = new Date();
  // helloService = new SayHelloService();
  constructor(
    private logger: LoggerService,
    private helloService: SayHelloService,
    private todoService: TodoService,
    private toaster: ToastrService
  ) { }
  ngOnInit(): void {
    this.logger.logger('cc je suis le cvComponent');
    this.helloService.hello();
    this.toaster.info('Bienvenu');
  }
  getSelectedCv(cv: Cv) {
    if (cv) {
      this.selectedCv = cv;
    }
    this.todoService.logTodos();
  }
}
