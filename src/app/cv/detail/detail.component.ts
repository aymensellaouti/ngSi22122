import {Component, Input, OnInit} from '@angular/core';
import {Cv} from "../model/cv";
import {EmbaucheService} from "../services/embauche.service";
import {ToastrService} from "ngx-toastr";
import {CvService} from "../services/cv.service";
import {Observable} from "rxjs";
import {distinctUntilChanged} from "rxjs/operators";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  // detailComponent(cv: Cv) {
    // printf (cv.name);
  // }
  @Input() cv: Cv | null = null;
  selectedItem$: Observable<Cv> | null = null;
  constructor(
    private embaucheService: EmbaucheService,
    private toaster: ToastrService,
    private cvService: CvService
  ) { }

  ngOnInit(): void {
    this.cvService.selectItemObservable$
      .pipe(distinctUntilChanged())
      .subscribe(
      (cv) => {this.cv = cv;}
    )
  }

  embaucher() {
    if (this.cv) {
      if (this.embaucheService.embaucher(this.cv)) {
        this.toaster.success(`La candidature de ${this.cv.firstname} ${this.cv.name} a été acceptée`);
      } else {
        this.toaster.warning(`La candidature de ${this.cv.firstname} ${this.cv.name} est déjà sélectionné`)
      }
    }
  }
}
