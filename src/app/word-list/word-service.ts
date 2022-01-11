import { Word } from './word';

export class WordService {
  items: Word[] = [];

  addToList(word: Word) {
    this.items.push(word);
  }

  getItems() {
    return this.items;
  }

  clearList() {
    this.items = [];
    return this.items;
  }
}
