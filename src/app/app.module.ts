import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WordListComponent } from './word-list/word-list.component';
import { WordDetailComponent } from './word-detail/word-detail.component';
import { WordAddComponent } from './word-add/word-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Word } from './word-list/word';
import { WordService } from './word-list/word-service';

@NgModule({
  declarations: [
    AppComponent,
    WordListComponent,
    WordDetailComponent,
    WordAddComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [WordService],
  bootstrap: [AppComponent],
})
export class AppModule {}
