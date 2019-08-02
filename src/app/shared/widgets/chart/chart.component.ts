import { Component, OnInit } from '@angular/core';
import * as zingchart from 'zingchart';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var myConfig = {
      type: 'line',
      crosshairX: {

      },
      plot: {
        aspect: 'spline'
      },
      scaleY: {
        values: '0:300:50'
      },
      series: [
        { values: [138.6, 196.3, 153.6, 127.4, 114.1, 181.4, 131.5, 170.9, 154.7, 105.2, 136.3, 180.4, 150.5, 135.3, 130.5, 164.3, 110.5, 127.2, 183.9, 191.3] },
        { values: [184.8, 165.8, 122.4, 196.6, 179.1, 116.4, 175.9, 137.8, 120.9, 177.3, 122.5, 123.1, 131.7, 109.4, 167.2, 142.7, 140.7, 165.5, 148.1, 181.9] },
        { values: [108.7, 132.9, 161.6, 192.1, 134.5, 149.4, 183.9, 124.4, 114.5, 121.9, 149.7, 124.3, 199.3, 151.4, 112.5, 113.5, 165.6, 139.5, 194.6, 184.4] },
        { values: [113.2, 165.6, 139.5, 194.6, 184.4, 179.2, 173.1, 133.7, 190.5, 128.9, 169.3, 108.5, 124.3, 135.1, 122.5, 125.7, 157.6, 138.1, 162.8, 112.6] },
        { values: [136.6, 160.8, 155.2, 158.7, 119.1, 192.4, 164.8, 151.4, 125.1, 106.9, 103.2, 158.6, 100.7, 137.2, 108.1, 162.7, 192.8, 149.2, 142.8, 134.3] }
      ]
    };

    zingchart.TOUCHZOOM = 'pinch';

    zingchart.render({
      id: 'myChart',
      data: myConfig,
      height: 400,
      width: '100%'
    });

  }

}
