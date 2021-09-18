import { Component, OnInit } from '@angular/core';
import { CounterService } from './../../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter: number;

  constructor(private readonly counterService: CounterService) {
    this.counter = 0;
  }

  increment() {
    this.counterService.increment();
    this.updateCounter();
  }

  decrement() {
    this.counterService.decrement();
    this.updateCounter();
  }

  updateCounter() {
    this.counter = this.counterService.counter;
  }

  ngOnInit(): void {
  }

}
