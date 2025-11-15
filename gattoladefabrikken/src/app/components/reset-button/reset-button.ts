import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reset-button',
  imports: [],
  templateUrl: './reset-button.html',
  styleUrl: './reset-button.css',
})
export class ResetButton {
  @Output() resetCallback = new EventEmitter<void>();
  onClickReset(): void {
    this.resetCallback.emit();
  }
}
