import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardModel } from '../../models/cardModel';
import { DiscardedCard } from '../discarded-card/discarded-card';

@Component({
  selector: 'app-discard-pile',
  imports: [DiscardedCard],
  templateUrl: './discard-pile.html',
  styleUrl: './discard-pile.css',
})
export class DiscardPile {
  @Input() discardedCards!: CardModel[];
  @Output() clickDiscardedCallback = new EventEmitter<CardModel>();
  onDiscardedCardClick(card: CardModel): void {
    console.log("DiscardPile emitting clicked discarded card with id: " + card.id);
    this.clickDiscardedCallback.emit(card);
  }
}
