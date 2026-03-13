import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModelVoorbeeld } from './ng-model-voorbeeld/ng-model-voorbeeld';
import { RegistratieOefening } from './registratie-oefening/registratie-oefening';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgModelVoorbeeld, RegistratieOefening],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  }
