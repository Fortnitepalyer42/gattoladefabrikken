import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardModel } from '../../models/cardModel';

@Component({
  selector: 'app-discarded-card',
  imports: [],
  templateUrl: './discarded-card.html',
  styleUrl: './discarded-card.css',
})
export class DiscardedCard {
  @Input() card!: CardModel;
  @Output()  clickDiscardedCallback = new EventEmitter<CardModel>();
  onDiscardedCardClick(): void {
    this.clickDiscardedCallback.emit(this.card);
  }
  public returnCardId(): number {
    return this.card.id;
  }
}
