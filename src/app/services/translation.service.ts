import { Injectable } from '@angular/core';
import { Languages } from '../components/language-picker/languages';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private ukTranslations: { [key: string]: string } = {
    hello: "Привіт",
    welcome: "Ласкаво просимо",
  }
  private enTranslations: { [key: string]: string } = {
    hello: "Hello",
    welcome: "Welcome",
  }

  public translations = {
    [Languages.uk]: this.ukTranslations,
    [Languages.en]: this.enTranslations,
  }

  constructor() { }
}
