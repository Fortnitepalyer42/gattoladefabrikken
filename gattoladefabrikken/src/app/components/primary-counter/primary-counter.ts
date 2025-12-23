import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-primary-counter',
  imports: [],
  templateUrl: './primary-counter.html',
  styleUrl: './primary-counter.css',
})
export class PrimaryCounter {
  @Input() score!: number;
  @Output() scoreChange = new EventEmitter<number>();

  public increment() { this.scoreChange.emit(this.score + 1); }
  public decrement() { this.scoreChange.emit(this.score - 1); }
}
