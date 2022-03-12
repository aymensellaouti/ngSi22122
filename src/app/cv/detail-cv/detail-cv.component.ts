import { Component, OnInit } from '@angular/core';
import {Cv} from "../model/cv";
import {ActivatedRoute, Router} from "@angular/router";
import {CvService} from "../services/cv.service";
import {ROUTES} from "../../config/routes";

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  cv: Cv | null = null;
  constructor(
    // Ce service est responsable de récupérer le paramètre de la route
    private activatedRoute: ActivatedRoute,
    // Ce service va me chercher le cv à partir de son id
    private cvService: CvService,
    // Ce service va nous permettre de faire une redirection
    private router: Router
  ) { }

  ngOnInit(): void {
    // On veut afficher les détails d'un cv d'un id donné
    // L'id on va le récupérer dans la route
    this.activatedRoute.params.subscribe(
      (param) => {
        this.cv = this.cvService.getCvById(param['id']);
        if (!this.cv) {
          this.router.navigate([ROUTES.cv]);
        }
      }
    )
  }
  deleteCv() {
    if (this.cv)
    {
      this.cvService.deleteCv(this.cv);
      this.router.navigate([ROUTES.cv]);
    }
  }
}
