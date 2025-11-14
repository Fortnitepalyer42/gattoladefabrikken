import { Component, signal } from '@angular/core';
import { CardModel, deck } from '../../models/cardModel';
import { CardDisplay } from '../card-display/card-display';
import { ActiveSlot } from '../active-slot/active-slot';
import { DiscardPile } from '../discard-pile/discard-pile';
import { MainDeck } from '../main-deck/main-deck';
import { DeckService } from '../../deck-service';
import { inject } from '@angular/core';
import { ScoreDisplay } from '../score-display/score-display';

@Component({
  selector: 'app-everything-container',
  imports: [DiscardPile, MainDeck, ActiveSlot, CardDisplay, ScoreDisplay],
  templateUrl: './everything-container.html',
  styleUrl: './everything-container.css',
})
export class EverythingContainer {
  public deckService = inject(DeckService)
  activeCardOne = signal<CardModel | null>(null);
  activeCardTwo = signal<CardModel | null>(null);
  discardedCards = signal<CardModel[]>([]);
  mainDeckCount = signal<number>(0);
  totalScore = signal<number>(0);
  displayedCardTitle = '...';
  displayedCardDescription = '...';
  constructor() {
    this.activeCardOne.set(this.deckService.activeCardOne);
    this.activeCardTwo.set(this.deckService.activeCardTwo);
    this.discardedCards.set(this.deckService.discardPile);
    this.mainDeckCount.set(this.deckService.mainDeck.length);
    console.log("EverythingContainer initialized" + this.mainDeckCount()  + " cards in main deck.");
  }
  drawCardCallback(): void {
    this.handleUpdateCallback(() => this.deckService.drawCard());
  }
  clickDiscardedCallback(card: CardModel): void {
    this.handleUpdateCallback(() => this.deckService.returnDiscardedCard(card));
  }
  discardActiveCallbackOne(): void {
    this.discardActiveCard(1);
  }
  discardActiveCallbackTwo(): void {
    this.discardActiveCard(2);
  }
  discardActiveCard(slot: number): void {
    if (slot === 1) { this.handleUpdateCallback(() => this.deckService.discardActiveCardOne());} 
    else if (slot === 2) { this.handleUpdateCallback(() => this.deckService.discardActiveCardTwo());}
  }
  handleUpdateCallback(input: () => boolean): void {
    var res = input();
    if (res) {
      console.log("Update callback executed successfully.");
      this.updateSignals();
    } else {
      console.log("Update callback failed.");
    }
  }
  private updateSignals(): void {
    this.activeCardOne.set(this.deckService.activeCardOne);
    this.activeCardTwo.set(this.deckService.activeCardTwo);
    this.discardedCards.set(this.deckService.discardPile);
    this.mainDeckCount.set(this.deckService.mainDeck.length);
  }
  displayCallback(cardId: number) {
    if (cardId <= 0) {
      this.displayedCardTitle = '...';
      this.displayedCardDescription = '...';
    } else {
      var res = this.deckService.getCardById(cardId);
      if (res) {
        this.displayedCardTitle = res.title;
        this.displayedCardDescription = res.desc;
      }
    }
  }
  scoreIncrementUpdate(cardId: number) {
    if (cardId <= 0) {
      console.warn("Invalid card for score increment!!");
    } else {
      var res = this.deckService.incrementScore(cardId);
      if (res) {
        this.totalScore.set(this.deckService.getTotalScore());
      }
      else
      {
        console.warn("failed to find card " + res);
      }
    }
  }
}
