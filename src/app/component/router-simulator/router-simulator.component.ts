import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-router-simulator',
  templateUrl: './router-simulator.component.html',
  styleUrls: ['./router-simulator.component.css']
})
export class RouterSimulatorComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  // La méthode navigate va lancer la route path
  naviguer(path: string): void {
    this.router.navigate([path]);
  }

}
