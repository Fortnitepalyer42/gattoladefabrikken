import { Component, Input } from '@angular/core';
import { CardModel } from '../../models/cardModel';

@Component({
  selector: 'app-discarded-card',
  imports: [],
  templateUrl: './discarded-card.html',
  styleUrl: './discarded-card.css',
})
export class DiscardedCard {
  @Input() card!: CardModel;
  @Input() public clickDiscardedCallback!: (card: CardModel) => boolean;
  public returnCardId(): number {
    return this.card.id;
  }
}
