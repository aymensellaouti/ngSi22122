import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-somme',
  templateUrl: './somme.component.html',
  styleUrls: ['./somme.component.css']
})
export class SommeComponent implements OnInit {
  @Input() x = 0;
  @Input() y = 0;
  constructor() { }
  // On a créer un evenement
  @Output() maSommeEst = new EventEmitter<number>();
  ngOnInit(): void {
  }
  somme() {
    //Emmetre l'event et y associer la data
    return this.x + this.y;
  }
  envoi() {
    this.maSommeEst.emit(this.x + this.y);
  }
}
