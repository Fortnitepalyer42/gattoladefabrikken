import { Injectable } from '@angular/core';
import { CardModel, deck, CardScore } from './models/cardModel';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  public mainDeck: CardModel[] = [];
      public discardPile: CardModel[] = [];
      public activeCardOne: CardModel | null = null;
      public activeCardTwo: CardModel | null = null; 
      public cardScores: CardScore[] = [];
      constructor() {
          this.mainDeck = [...deck];
          this.discardPile = [];
          this.activeCardOne = null;
          this.activeCardTwo = null;
          var index: number = 1;
          for (index; index <= 20; index++ ){
            this.cardScores.push({ id: index , score: 0});
          }
          console.assert(this.cardScores.length == 20);
      }
    public setActiveCard(card: CardModel): boolean {
          if (!this.activeCardOne) {
              this.activeCardOne = card;
          } else if (!this.activeCardTwo) {
              this.activeCardTwo = card;
          } else {
              return false; // Both active card slots are occupied
          }
          return true;
      }
    public drawCard(): boolean {
        console.log("Attempting to draw a card");
          if (this.mainDeck.length === 0 || (this.activeCardOne && this.activeCardTwo)) {
              //deck is empty or both active cards are occupied
              return false;
          }
          const drawnCardIndex = Math.floor(Math.random() * this.mainDeck.length);
          const drawnCard = this.mainDeck.splice(drawnCardIndex, 1)[0];
          if (this.setActiveCard(drawnCard)) {
              // Card successfully set as active
              return true;
          }
          else {
              //Arguably unneccesary else since we check earlier
              // Both active card slots are occupied, return card to deck
              this.mainDeck.push(drawnCard);
              return false;
          }
      }
    public discardActiveCardOne(): boolean {
          if (this.activeCardOne) {
              this.discardPile.push(this.activeCardOne);
              this.activeCardOne = null;
              return true;
          }
          return false;
      }
    public discardActiveCardTwo(): boolean {
          if (this.activeCardTwo) {
              this.discardPile.push(this.activeCardTwo);
              this.activeCardTwo = null;
              return true;
          }
          return false;
      }
    public returnDiscardedCard(card: CardModel): boolean {
          const index = this.discardPile.findIndex(c => c.id === card.id);
          if (index !== -1) {
            if (this.setActiveCard(this.discardPile[index]))
              this.discardPile.splice(index, 1);
              return true;
          } else {
              return false;
          }
      }
    public resetDeck(): void {
          this.mainDeck = [...deck];
          this.discardPile = [];
          this.activeCardOne = null;
          this.activeCardTwo = null;
      }
    public getCardById(cardId: number): CardModel | null {
        if (cardId < 1 || cardId > 20)
            return null;
        const foundCard: CardModel | undefined = deck.find(c => c.id === cardId)
        if (foundCard) { return foundCard}
        return null
    }

    public incrementScore(cardId: number): CardScore | null {
        if (cardId < 1 || cardId > 20)
            return null;
        const score: CardScore | undefined = this.cardScores.find(cs => cs.id === cardId)
        if (score){
            if (score.score == 5)
                score.score = 0;
            else 
                score.score++
            this.cardScores[score.id -1] = score;
            return score;
        }
        return null;
    }
}
