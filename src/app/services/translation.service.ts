import { Injectable } from '@angular/core';
import { Languages } from '../components/language-picker/languages';
import { enTranslations } from '../translations/en';
import { ukTranslations } from '../translations/uk';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  public translations = {
    [Languages.uk]: ukTranslations,
    [Languages.en]: enTranslations,
  }

  constructor() { }
}
