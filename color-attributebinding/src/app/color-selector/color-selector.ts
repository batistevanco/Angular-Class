import { Component } from '@angular/core';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.html',
})

export class ColorSelector {

  backGroundColor: string = '';
  colorfont: string = '';

  onChangeColor(bgColor: string, txtColor: string) {
    this.backGroundColor = bgColor;
    this.colorfont = txtColor;
  }

  setBackgroundColor(bgColor: string) {
    this.backGroundColor = bgColor;
  }
 

}