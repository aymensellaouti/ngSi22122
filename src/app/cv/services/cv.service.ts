import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {API} from "../../config/api";

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvs: Cv[] = [];
  private selectItemSubject = new Subject<Cv>();
  selectItemObservable$ = this.selectItemSubject.asObservable();
  constructor(private http: HttpClient) {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'Teacher', 'as.jpg', '1234', 39),
      new Cv(2, 'sallouhi', 'henda', 'Teacher', '', '12345', 20),
      new Cv(3, 'Mekni', 'yassine', 'Ingénieur', '         ', '123456', 22),
    ];
  }
  getFakeCvs(): Cv[] {return this.cvs;}
  // Expose un observable qui me permet de récupérer les cvs de mon API via le service HttpClient
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(API.cv);
  }
  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index > -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }
  getFakeCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id == id) ?? null;
  }
  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(API.cv + id);
  }
  selectItem(cv: Cv) {
    this.selectItemSubject.next(cv);
  }
}
