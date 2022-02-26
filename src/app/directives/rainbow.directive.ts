import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  // Quels propriété je dois gérer
  @HostBinding('style.color') color = '';
  @HostBinding('style.borderColor') bc = '';
  constructor() { }
  // Quels evenements je dois gérer
  @HostListener('keyup') onKeyUp() {
  // Affecter aléatoirement une couleur à color et bc
    this.color = this.bc = this.getRandomColor();
  }

  private getRandomColor(): string {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
}
