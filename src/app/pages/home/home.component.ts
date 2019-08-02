import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'ons-page[home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  history = [
    {
      pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTdGRT6aGZUN918qbxWV1-U86kQ-qgTMl1yCbLhUA9gYVFEMGvQ',
      title: 'Jhon Smith',
      time: '1h ago',
      amount: '+8.50'
    },
    {
      pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHAG-ryaOaqpQv_l0oXNOAFpJnycTx_sBbD2JqAHlT-KABRcfT',
      title: 'McDonalds',
      time: '12:30',
      amount: '-9.30'
    },
    {
      pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRncmAE2sowXRfgrjefG5xFz4YltvFQluVz7tZ5IdZZ5TgcRnTblQ',
      title: 'T-mobile',
      time: '13:00',
      amount: '-5.30'
    },
    {
      pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBb1De1ig_qGgZQqtG3rxmMYUg_rZOFb7qYLJ-llJc0EqV_y50Pw',
      title: 'Starbucks',
      time: '14:20',
      amount: '-8.50'
    },
    {
      pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHAG-ryaOaqpQv_l0oXNOAFpJnycTx_sBbD2JqAHlT-KABRcfT',
      title: 'McDonalds',
      time: '14:30',
      amount: '-9.30'
    },
    {
      pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRncmAE2sowXRfgrjefG5xFz4YltvFQluVz7tZ5IdZZ5TgcRnTblQ',
      title: 'T-mobile',
      time: '16:10',
      amount: '-5.30'
    }
  ]

  constructor() { }

  ngOnInit() {




  }

}
