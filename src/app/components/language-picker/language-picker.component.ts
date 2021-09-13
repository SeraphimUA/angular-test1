import { Component, OnInit } from '@angular/core';
import { Languages } from './languages';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss']
})
export class LanguagePickerComponent implements OnInit {
  LanguageOptions = Languages;
  language: Languages;

  constructor(readonly langService: LanguageService) {
    this.language = Languages.en;
    langService.language$
      .subscribe(newLang => this.language = newLang);
  }

  ngOnInit(): void {
  }

  langChanged() {
    this.langService.setLanguage(this.language);
  }

}
