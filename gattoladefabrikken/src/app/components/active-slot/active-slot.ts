import { Component, Output, EventEmitter} from '@angular/core';
import { CardModel } from '../../models/cardModel';
import { Input } from '@angular/core';

@Component({
  selector: 'app-active-slot',
  imports: [],
  templateUrl: './active-slot.html',
  styleUrl: './active-slot.css',
})
export class ActiveSlot {
  @Input() card!: CardModel | null;
  @Output() clickActiveCallback = new EventEmitter<void>();
  @Output() displayCallback = new EventEmitter<number>();
  @Output() incrementScoreCallback = new EventEmitter<number>();

  onActiveSlotClick(): void {
    this.card = null;
    this.clickActiveCallback.emit();
  }
  displayCard(): void {
    this.displayCallback.emit(this.card?.id ?? -1);
  }
  onIncrementScore(): void {
    this.incrementScoreCallback.emit(this.card?.id ?? -1);
  }
}
