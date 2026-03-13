import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registratie-oefening',
  imports: [FormsModule],
  templateUrl: './registratie-oefening.html',
  styleUrl: './registratie-oefening.css',
})
export class RegistratieOefening {
  naam: string = '';
  leeftijd: number = 0;
  constructor() {
    this.naam = 'vul in';
    this.leeftijd = 0;
  }


}
