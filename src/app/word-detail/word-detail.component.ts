import { Component, Input, OnInit } from '@angular/core';
import { Word } from '../word-list/word';

@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.css'],
})
export class WordDetailComponent implements OnInit {
  @Input() selectedWord: Word;

  constructor() {}

  ngOnInit(): void {}
}
