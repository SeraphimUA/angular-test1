import { Injectable } from '@angular/core';
import { Languages } from '../components/language-picker/languages';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  language$ = new BehaviorSubject<Languages>(Languages.en);

  setLanguage(newLang: any) {
    this.language$.next(newLang);
    //this.showLanguage();
  }

  constructor() {
    
  }

  showLanguage() {
    this.language$.subscribe(x => console.log(x));
  }
}
