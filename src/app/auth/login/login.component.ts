import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {ROUTES} from "../../config/routes";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private toaster: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  login(loginForm: NgForm) {
    this.authService.login(loginForm.value).subscribe({
      next: (response) => {
        // Todo
      //  Enregistrer le token
        localStorage.setItem('token', response.id);
      // Afficher un success message
        this.toaster.success(`Bienvenu dans votre cvTech`);
      //  rediriger vers la page accueil
        this.router.navigate([ROUTES.cv]);
      },
      error: () => {
        // Afficher un error message
        this.toaster.error(`Veuillez vérifier vos credentials `);
      }
    });
  }

}
