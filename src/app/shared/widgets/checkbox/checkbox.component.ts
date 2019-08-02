import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  colors: string[] = ['Red', 'Green', 'Blue'];
  checkedColors: string[] = ['Green', 'Blue'];
  exampleControl: FormControl = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

}
