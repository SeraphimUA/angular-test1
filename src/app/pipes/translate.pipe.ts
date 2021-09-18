import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { TranslationService } from '../services/translation.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  constructor(private readonly translationService: TranslationService,
    private readonly langService: LanguageService) { }

  /*transform(value: string): Observable<string> {
    var currentLang$ = this.langService.language$;
    console.log(`value: ${value} value type: ${typeof value} currentLang: ${currentLang$.value}`);

    return currentLang$
      .pipe(
        map(currentLang => this.translationService.translations[currentLang][value] || value)
      )
  }*/

  transform(value: string): string {
    var currentLang = this.langService.language$.value;
    
    // console.log(`value: ${value} value type: ${typeof value} currentLang: ${currentLang}`);

    return this.translationService.translations[currentLang][value] || value;
  }

}
