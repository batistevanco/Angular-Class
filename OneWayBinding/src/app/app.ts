import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  highSchool: string;
  studentName: string;

  constructor() {
    this.highSchool = 'VIVES';
    this.studentName = 'Batiste Vancoillie';
  }
}

