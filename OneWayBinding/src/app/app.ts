import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from './shared/models/student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  highSchool: string;
  studentName: string;
  students: string[];
  studentsModel: Student[];

  constructor() {
    this.highSchool = 'VIVES';
    this.studentName = 'Batiste Vancoillie';
    this.students = ['Janssens', 'Vermeulen', 'Azis', 'Plancaert'];
    this.studentsModel = [
        new Student(1, 'Jansen', 'r001@student.vives.be'),
        new Student(2, 'Vermeulen', 'r001@student.vives.be'),
        new Student(3, 'Azis', 'r001@student.vives.be'),
        new Student(4, 'Plancaert', 'r001@student.vives.be'),
    ]
  }
  
}

