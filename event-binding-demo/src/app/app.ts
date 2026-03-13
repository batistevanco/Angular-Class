import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count = 0;
  clickCount = 0;
  keyboardInput = '';
  studentInput = '';
  email = '';
  students = ['Azis', 'Vermeulen'];

  increment() {
    this.count++;
  }

  reset() {
    this.count = 0;
  }

  sayHello(name: string) {
    alert(`Hello ${name}`);
  }

  saveEmail(email: string) {
    this.email = email;
    console.log(`Email ${email} saved!`);
  }

  incrementClickCount() {
    this.clickCount++;
  }

  showClickAlert() {
    alert('Button clicked');
  }

  //-------------------------------------------------
  //own exercises: add students to the list and remove them, using event binding and property binding

  updateKeyboardInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.keyboardInput = input.value;
  }

  updateStudentInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.studentInput = input.value;
  }

  addStudent() {
    const trimmedName = this.studentInput.trim();
    if (!trimmedName) {
      return;
    }

    this.students.push(trimmedName);
    this.studentInput = '';
  }

  removeStudent(index: number) {
    this.students.splice(index, 1);
  }
}
