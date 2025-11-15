import { Injectable } from '@angular/core';
import { CardModel, deck, MaxDeckSize, SavedGameState } from '../models/cardModel';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
    public mainDeck: CardModel[] = [];
    public discardPile: CardModel[] = [];
    public activeCardOne: CardModel | null = null;
    public activeCardTwo: CardModel | null = null; 
    constructor() {
        this.mainDeck = [...deck];
        this.discardPile = [];
        this.activeCardOne = null;
        this.activeCardTwo = null;
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
            console.log(this.activeCardOne)
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
        if (cardId < 1 || cardId > MaxDeckSize)
            return null;
        const foundCard: CardModel | undefined = deck.find(c => c.id === cardId);
        if (foundCard) { return foundCard}
        return null
    }

    public incrementScore(cardId: number): CardModel | null {
        var scoringCard: CardModel | null = null;
        if (cardId === this.activeCardOne?.id) 
            {scoringCard = this.activeCardOne;} 
        else if (cardId === this.activeCardTwo?.id) 
            {scoringCard = this.activeCardTwo;} 
        if (scoringCard){
            if (scoringCard.score == 5)
                scoringCard.score = 0;
            else 
                scoringCard.score++
            return scoringCard;
        }
        console.warn("CardId: "+ cardId + " does not match any active cards");
        return null;
    }

    public getTotalScore(): number {
        var index: number = 0;
        var acc: number = 0;
        if (this.activeCardOne){
            acc += this.activeCardOne.score;
        }
        if (this.activeCardTwo){
            acc += this.activeCardTwo.score;
        }
        for (index; index < this.discardPile.length; index++)
        {
            acc += this.discardPile[index].score;
        }
        return acc;
    }

    public setState(state: SavedGameState) {
        this.resetDeck();
        this.mainDeck = [...state.currentDeck];
        this.activeCardOne = state.activeOne;
        this.activeCardTwo = state.activeTwo;
        this.discardPile = state.discarded;
    }
}
