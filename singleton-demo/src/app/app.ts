import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentB } from './component-b/component-b';
import { ComponentA } from './component-a/component-a';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentA, ComponentB],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('singleton-demo');
}
