import { Component, signal } from '@angular/core';
import { CardModel } from '../../models/cardModel';
import { CardDisplay } from '../card-display/card-display';
import { ActiveSlot } from '../active-slot/active-slot';
import { DiscardPile } from '../discard-pile/discard-pile';
import { MainDeck } from '../main-deck/main-deck';
import { DeckService } from '../../deck-service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-everything-container',
  imports: [DiscardPile, MainDeck, ActiveSlot, CardDisplay],
  templateUrl: './everything-container.html',
  styleUrl: './everything-container.css',
})
export class EverythingContainer {
  public deckService = inject(DeckService)
  activeCardOne = signal<CardModel | null>(null);
  activeCardTwo = signal<CardModel | null>(null);
  discardedCards = signal<CardModel[]>([]);
  mainDeckCount = signal<number>(0);
  constructor() {
    this.activeCardOne.set(this.deckService.activeCardOne);
    this.activeCardTwo.set(this.deckService.activeCardTwo);
    this.discardedCards.set(this.deckService.discardPile);
    this.mainDeckCount.set(this.deckService.mainDeck.length);
    console.log("EverythingContainer initialized" + this.mainDeckCount()  + " cards in main deck.");
  }
  clickDeckCallback(): void {
    console.log("Callback to draw card triggered");
    this.drawCard();
  }
  drawCard(): void {
    var res = this.deckService.drawCard();
    if (res) {
      console.log("Drew a card");
      this.updateSignals();
    } else {
      console.log("Could not draw a card");
    }
  }
  clickDiscardedCallback(card: CardModel): void {
    this.returnDiscardedCard(card);
  }
  returnDiscardedCard(card: CardModel): void {
    var res = this.deckService.returnDiscardedCard(card)
    if (res) {
      console.log("Returned discarded card with id " + card.id + " to main deck.");
      this.updateSignals();
    } else {
      console.log("Could not return discarded card with id " + card.id + " to main deck.");
    }
  }
  clickActiveCallbackOne(): void {
    this.discardActiveCard(1);
  }
  clickActiveCallbackTwo(): void {
    this.discardActiveCard(2);
  }
  discardActiveCard(slot: number): void {
    var res;
    if (slot === 1) {
      res = this.deckService.discardActiveCardOne();
    } else if (slot === 2) {
      res = this.deckService.discardActiveCardTwo();
    }
    if (res) {
      console.log("Discarded active card from slot " + slot);
      this.updateSignals();
    }
  }
  private updateSignals(): void {
    this.activeCardOne.set(this.deckService.activeCardOne);
    this.activeCardTwo.set(this.deckService.activeCardTwo);
    this.discardedCards.set(this.deckService.discardPile);
    this.mainDeckCount.set(this.deckService.mainDeck.length);
  }
}
