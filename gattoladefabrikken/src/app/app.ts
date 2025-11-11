import { Component, signal } from '@angular/core';
import { EverythingContainer } from './components/everything-container/everything-container';
@Component({
  selector: 'app-root',
  imports: [EverythingContainer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gattoladefabrikken');
}
