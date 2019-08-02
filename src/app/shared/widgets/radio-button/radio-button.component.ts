import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {
  fruits: string[] = ['Apples', 'Bananas', 'Oranges'];
  selectedFruit: string = 'Bananas';
  vegetables: string[] = ['Potato', 'Turnip', 'Broccoli'];
  exampleForm: FormGroup;

  constructor() {
    this.exampleForm = new FormGroup({
      vegetable: new FormControl('')
    });
  }

  ngOnInit() {
  }

}
