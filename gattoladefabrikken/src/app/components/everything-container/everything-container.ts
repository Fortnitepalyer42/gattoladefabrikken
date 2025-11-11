import { Component } from '@angular/core';
import { CardModel } from '../../models/cardModel';
import { CardDisplay } from '../card-display/card-display';
import { ActiveSlot } from '../active-slot/active-slot';
import { DiscardPile } from '../discard-pile/discard-pile';
import { MainDeck } from '../main-deck/main-deck';
import { DeckService } from '../../deck-service';

@Component({
  selector: 'app-everything-container',
  imports: [],
  templateUrl: './everything-container.html',
  styleUrl: './everything-container.css',
})
export class EverythingContainer {
  constructor(public deckService: DeckService) {}
}
