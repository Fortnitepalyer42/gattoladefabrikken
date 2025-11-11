import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-deck',
  imports: [],
  templateUrl: './main-deck.html',
  styleUrl: './main-deck.css',
})
export class MainDeck {
  @Output() clickDeckCallback = new EventEmitter<void>();

  onDeckClick(): void {
    this.clickDeckCallback.emit();
  }
}
