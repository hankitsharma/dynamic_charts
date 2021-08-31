import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { JsonToTypescriptService } from '../services/jsonToTypescript.service';

@Component({
  selector: 'app-Chart-Line',
  templateUrl: './Chart-Line.component.html',
  styleUrls: ['./Chart-Line.component.css']
})
export class ChartLineComponent implements OnInit {


  constructor(private jsonData : JsonToTypescriptService){}

  ngOnInit() {
    var myChart = new Chart("myChart2", {
        type: 'line',
        data: {
            labels: this.jsonData.getProductName(),
            datasets: [{
                label: 'Sales Cost',
                borderColor: 'rgb(75, 192, 192)',
                data: this.jsonData.getSaleCost(),
                fill: false,
                borderWidth: 1,
                tension: .5
            }]
        }
    });
  }
}
