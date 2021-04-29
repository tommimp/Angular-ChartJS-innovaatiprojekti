import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { NumeroService } from '../numerot.service';
import { Observable} from 'rxjs';
import { interval } from 'rxjs';




@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {
  chart = [];
  data = [];
  manu = [];

  public chartupdate () {
    this._numero.fetchDevice()
    .subscribe(result => {

      
      let Version = result["version"]
      let Bnumber = result["build_number"]
      this.data.push (Bnumber,Version)

      let Manufacturer = result["manufacturer"]
      this.manu.push (Manufacturer)
      
      this.chart; new Chart('linechart', {
        type: 'line',
        data: {
          labels: this.manu,
          datasets: [
            {
              data: this.data,
              backgroundColor: 'rgba(150, 10, 25, 0.5)',
              borderColor: 'rgba(150, 10, 25, 0.5)',
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

  ngOnInit() {
    this.chartupdate() 
  }




  DeleteLast(): void {
    this.data.length = 0;
    this.manu.length = 0;
}
}
