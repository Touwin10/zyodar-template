import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {
  @Input() backgroundColor: string = "#174271";

  constructor() { }

  ngOnInit() {
  }

}
