import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { ToDoItemsComponent } from './components/to-do-items/to-do-items.component';
import { PipesTestComponent } from './components/pipes-test/pipes-test.component';
import { LanguagePickerComponent } from './components/language-picker/language-picker.component';
import { FormsModule } from '@angular/forms';
import { TranslationTestComponent } from './components/translation-test/translation-test.component';
import { TranslatePipe } from './pipes/translate.pipe';
// import { TranslatePipe } from './pipes/translate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToDoItemsComponent,
    PipesTestComponent,
    LanguagePickerComponent,
    TranslationTestComponent,
    TranslatePipe,
    //TranslatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
