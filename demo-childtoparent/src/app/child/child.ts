import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  private _count : number

  @Output() countChanged = new EventEmitter<number>();
  @Input() get count() {
    return this._count;
  }
  set count(val: number) {
    this._count = val;
  }

  constructor() {
    this._count = 0;
  }

  ngOnInit() {
    this.countChanged.emit(this._count);
  }

  increment() {
    this._count++;
    this.countChanged.emit(this._count);
  }

  decrement() {
    this._count--;
    this.countChanged.emit(this._count);
  }
}
