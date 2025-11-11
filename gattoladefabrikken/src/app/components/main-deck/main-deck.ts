import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-deck',
  imports: [],
  templateUrl: './main-deck.html',
  styleUrl: './main-deck.css',
})
export class MainDeck {
  @Input() public clickDeckCallback!: () => boolean;
}
