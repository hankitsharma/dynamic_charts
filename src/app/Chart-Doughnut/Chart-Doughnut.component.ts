import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { JsonToTypescriptService } from '../services/jsonToTypescript.service';

@Component({
  selector: 'app-Chart-Doughnut',
  templateUrl: './Chart-Doughnut.component.html',
  styleUrls: ['./Chart-Doughnut.component.css']
})
export class ChartDoughnutComponent implements OnInit {

  constructor(private jsonData : JsonToTypescriptService){}

  ngOnInit() {
    var myChart = new Chart("myChart1", {
        type: 'doughnut',
        data: {
            labels: this.jsonData.getProductName(),
            datasets: [{
                label: 'Profit',
                data: this.jsonData.getProfit(),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        }
    });
  }
}
