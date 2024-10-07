import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  public counter: number = 10;


  add(number: number): void {
    this.counter += number;
  }

  reset(): void {
    this.counter = 10;
  }
  
}
