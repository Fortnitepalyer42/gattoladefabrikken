import { Injectable } from '@angular/core';
import { SavedGameState } from '../models/cardModel';

@Injectable({
  providedIn: 'root',
})
export class ApplicationStateService {
  private storageKey = 'savedState';
  private _savedState: SavedGameState | null = this.loadState();
  constructor() {}

  setState(value: SavedGameState) {
    this._savedState = value;
    localStorage.setItem(this.storageKey, JSON.stringify(this._savedState));
  }

  getState() {
    return this._savedState;
  }

  clear(){
    console.log("Clearing save data");
    localStorage.clear();
  }

  private loadState(): SavedGameState| null {
    var data = localStorage.getItem(this.storageKey);
    //return null;
    return data ? JSON.parse(data) : null;
  }
}
