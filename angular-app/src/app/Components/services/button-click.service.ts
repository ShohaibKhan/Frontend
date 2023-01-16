import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtonClickService {
  private buttonClicked = new Subject<void>();
  buttonClicked$ = this.buttonClicked.asObservable();

  buttonClickedEvent() {
    this.buttonClicked.next();
  }
}