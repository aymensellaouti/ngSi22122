import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Cv} from "../model/cv";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() cv: Cv | null = null;
  @Input() size = 50;
  // J'ai créer un emetteur d'event
  @Output() selectItem = new EventEmitter<Cv>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelectItem() {
  //  Je doit emettre l'event avec l'objet Cv à l'intérieur
    if (this.cv) {
      this.selectItem.emit(this.cv);
    }
  }
}
