import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhotoSelector } from './photo-selector/photo-selector';


//ng g c PhotoSelector
@Component({
  selector: 'app-root',
  imports: [PhotoSelector],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
