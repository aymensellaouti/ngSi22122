import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Cv} from "../model/cv";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  @Output() sendItemFromList = new EventEmitter<Cv>();
  constructor() { }

  ngOnInit(): void {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'Teacher', 'as.jpg', '1234', 39),
      new Cv(2, 'sallouhi', 'henda', 'Teacher', 'rotating_card_profile.png', '12345', 20),
      new Cv(2, 'Mekni', 'yassine', 'Ingénieur', 'rotating_card_profile3.png', '123456', 22),
    ];
  }

  forwardItem(cv: Cv) {
    this.sendItemFromList.emit(cv);
  }
}
