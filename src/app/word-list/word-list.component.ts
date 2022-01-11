import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Word } from './word';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css'],
})
export class WordListComponent implements OnInit {
  selectedWord: Word;
  @Output() addedWord = new EventEmitter<Word>();
  @Input() wordList: Array<Word> = [];

  constructor() {}

  ngOnInit(): void {
    this.wordList.push(new Word('dummkopf', 'means dummy person'));
  }

  addNewWord(word: Word) {
    this.addedWord.emit(word);
  }

  showDetail(item: Word) {
    this.selectedWord = item;
  }
}
