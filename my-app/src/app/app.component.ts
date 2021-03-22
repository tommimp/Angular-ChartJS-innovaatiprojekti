import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { NumeroService } from './numerot.service';
import { HttpClient } from '@angular/common/http';
import * as Chart from 'chart.js';
import { catchError, retry, map } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  chart = [];

  public chartupdate () {
    this._numero.fetchNumero()
    .subscribe(result => {

      
      let Decimal = result["decimal"]
      let Digit = result["digit"]
      let Normal = result["normal"]
      
      this.chart; new Chart('canvas', {
        type: 'bar',
        data: {
          labels: ["Dec","Dig"],
          datasets: [
            {
              data: [Decimal, Digit],
              backgroundColor: ['rgba(150, 10, 25, 0.5)','rgba(50, 100, 250, 0.5)'],
              borderColor: 'rgba(150, 10, 25, 0.5)',
              fill: true
            },
            {
              data: [Digit],
              borderColor: '2A63D4',
              fill: true
            },
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes:[{
              display: true
            }]
          }
        }
      })

    })
  }


  constructor(private _numero: NumeroService) {}

  ngOnInit() {this.chartupdate()}

  title = 'my-app';
}
