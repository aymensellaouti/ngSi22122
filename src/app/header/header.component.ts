import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {ROUTES} from "../config/routes";
import {Router} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(
      public authService: AuthService,
      private router: Router,
    ) {
    }

    ngOnInit(): void {
    }

  logout() {
  //  Todo Appeler la methode logout du service authService + redirection vers accueil ou login
    this.authService.logout();
    this.router.navigate([ROUTES.cv]);
  }
}
