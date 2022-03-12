import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color = 'blue';
  title = 'ngSi22122';
  constructor(private router: Router) {}

  naviguer() {
    this.router.navigate(['cv']);
  }
}
