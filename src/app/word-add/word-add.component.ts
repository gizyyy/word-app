import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WordService } from '../word-list/word-service';

@Component({
  selector: 'app-word-add',
  templateUrl: './word-add.component.html',
  styleUrls: ['./word-add.component.css'],
})
export class WordAddComponent implements OnInit {
  items = this.wordService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    description: '',
  });

  constructor(
    private wordService: WordService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.wordService.addToList(this.checkoutForm.value);
    console.warn('Your word has been added', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
