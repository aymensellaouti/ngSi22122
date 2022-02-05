import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <p>
      second works! Cc c'est Mahdi :)
    </p>
  `,
  styles: [
  ]
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
