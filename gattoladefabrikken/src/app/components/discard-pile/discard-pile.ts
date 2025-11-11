import { Component, Input, signal } from '@angular/core';
import { CardModel } from '../../models/cardModel';
import { DiscardedCard } from '../discarded-card/discarded-card';

@Component({
  selector: 'app-discard-pile',
  imports: [DiscardedCard],
  templateUrl: './discard-pile.html',
  styleUrl: './discard-pile.css',
})
export class DiscardPile {
  discardedCards = signal<CardModel[]>([]);
  @Input() public clickDiscardedCallback!: (card: CardModel) => boolean;
}
