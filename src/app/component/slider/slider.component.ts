import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  sliderObservable$: Observable<string> | null = null;
  @Input() timer = 1000;
  @Input() width = 200;
  @Input() heigth = 200;
  @Input() isRounded = true;
  @Input() paths = [
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
    'cv.png',
    'tim_logo.png',
    'as.jpg',
  ];
  path = 'as.jpg';
  constructor() { }

  ngOnInit(): void {
    this.sliderObservable$ = new Observable<string>(
      (obsever) => {
        let i = 0;
        setInterval(
          () => {
            if (i == this.paths.length) {
              i = 0;
            }
            obsever.next(this.paths[i++]);
          }, this.timer
        )
      }
    );
    this.sliderObservable$.subscribe(
      (newPath) => {
        this.path = newPath;
      }
    )
  }

}
