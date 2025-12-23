import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PrimaryCounter } from '../primary-counter/primary-counter';

@Component({
  selector: 'app-primary-container',
  imports: [PrimaryCounter],
  templateUrl: './primary-container.html',
  styleUrl: './primary-container.css',
})
export class PrimaryContainer {
  @Input() primaryScores: number[] = [0,0,0,0];
  @Output() primaryScoresChange = new EventEmitter<number[]>();

  public onScoreChange(index: number, newValue: number) {
    // create a new array and emit it
    const updated = [...this.primaryScores];
    updated[index] = newValue;
    this.primaryScoresChange.emit(updated);
  }
}
