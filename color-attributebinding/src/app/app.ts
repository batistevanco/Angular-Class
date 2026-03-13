import { Component } from '@angular/core';
import { ColorSelector } from './color-selector/color-selector';

@Component({
  selector: 'app-root',
  imports: [ColorSelector],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
