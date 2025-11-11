import { Component } from '@angular/core';
import { CardModel } from '../../models/cardModel';
import { Input } from '@angular/core';

@Component({
  selector: 'app-active-slot',
  imports: [],
  templateUrl: './active-slot.html',
  styleUrl: './active-slot.css',
})
export class ActiveSlot {
  @Input() card!: CardModel;
  @Input() public clickActiveCallback!: (card: CardModel) => boolean;

  public returnCardId(): number {
    return this.card.id;
  }
}
