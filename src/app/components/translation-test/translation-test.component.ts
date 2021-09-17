import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-translation-test',
  templateUrl: './translation-test.component.html',
  styleUrls: ['./translation-test.component.scss']
})
export class TranslationTestComponent implements OnInit {

  constructor(readonly langService: LanguageService) { }

  ngOnInit(): void {
  }

}
