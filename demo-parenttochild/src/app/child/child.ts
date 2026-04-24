import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  private _count = 0;
  private _message = '';

  @Input() get count() {
    return this._count;
  }
  set count(val: number) {
    this._count = val;
  }

  @Input() get message() {
    return this._message;
  }
  set message(val: string) {
    this._message = val;
  }

  constructor() {
    this._count = 0;
    this._message = '';
  }
}
