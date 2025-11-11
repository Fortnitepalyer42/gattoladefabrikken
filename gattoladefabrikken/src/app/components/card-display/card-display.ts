import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-display',
  imports: [],
  templateUrl: './card-display.html',
  styleUrl: './card-display.css',
})
export class CardDisplay {
  @Input() public title!: string;
  @Input() public description!: string;
}
