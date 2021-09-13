import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeUk from '@angular/common/locales/uk';
registerLocaleData(localeUk, 'uk');

@Component({
  selector: 'app-pipes-test',
  templateUrl: './pipes-test.component.html',
  styleUrls: ['./pipes-test.component.scss']
})
export class PipesTestComponent implements OnInit {
  str = 'Hello World';
  num = 0.14;
  dateObject: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
