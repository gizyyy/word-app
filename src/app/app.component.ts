import { Component } from '@angular/core';
import { WordService } from './word-list/word-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'word-app';
  items = this.wordService.getItems();
  constructor(private wordService: WordService) {}
}
