import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Cv} from "../model/cv";
import {CvService} from "../services/cv.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  // @Output() sendItemFromList = new EventEmitter<Cv>();
  constructor(
    private cvService: CvService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.cvService.getCvs().subscribe({
        next: (cvs) => {
        //  Todo : Quoi faire en cas de succès
          this.cvs = cvs;
        },
        error: (error) => {
        //  Todo : Quoi faire en cas de d'erreur
          this.toastr.error(`Les données affichées sont Fake, veuillez contacter l'admin`);
          this.cvs = this.cvService.getFakeCvs();
        }
      }
    );
  }

  // forwardItem(cv: Cv) {
  //   this.sendItemFromList.emit(cv);
  // }
}
