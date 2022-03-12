import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";
@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvs: Cv[] = [];
  constructor() {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'Teacher', 'as.jpg', '1234', 39),
      new Cv(2, 'sallouhi', 'henda', 'Teacher', '', '12345', 20),
      new Cv(3, 'Mekni', 'yassine', 'Ingénieur', '         ', '123456', 22),
    ];
  }
  getCvs(): Cv[] {return this.cvs;}
  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index > -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }
  getCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id == id) ?? null;
  }
}
