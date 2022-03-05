import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  embauchees: Cv[] = [];
  constructor() { }
  getEmbauches(): Cv[] {return this.embauchees;}
  embaucher(cv: Cv): boolean {
    const index = this.embauchees.indexOf(cv);
    if (index === -1) {
      this.embauchees.push(cv);
      return true;
    }
    return false;
  }
}
