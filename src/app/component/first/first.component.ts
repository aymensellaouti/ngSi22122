import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  //attributs => state
  name = 'aymen';
  isHidden = false;
  color = 'lightblue';
  message = '';
  constructor() { }
  //methods => Behaviour
  ngOnInit(): void {
    // setInterval(
    //   () => {
    //     this.isHidden = !this.isHidden;
    //   },
    //   1500
    // );
  }
  sayCc(leContenuDeLInput: string) {
    alert('cc');
    this.message = leContenuDeLInput;
  }
  changeColor(newColor: string) {
    this.color = newColor;
  }
  processSonEvent(somme: number) {
    alert(somme);
  }
}
