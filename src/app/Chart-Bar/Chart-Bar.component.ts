import { JsonToTypescriptService } from './../services/jsonToTypescript.service';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-Chart-Bar',
  templateUrl: './Chart-Bar.component.html',
  styleUrls: ['./Chart-Bar.component.css']
})
export class ChartBarComponent implements OnInit {

  constructor(private jsonData : JsonToTypescriptService){}

  ngOnInit() {
    let myChart = new Chart("myChart", {
        type: 'bar',
        data: {
            labels: this.jsonData.getProductName(),
            datasets: [{
                label: 'Purchase Cost',
                data: this.jsonData.getPurchaseCost(),
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
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
  }
}
