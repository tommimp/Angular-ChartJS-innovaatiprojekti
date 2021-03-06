import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { NumeroService } from '../numerot.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Dec','Dig'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public pieChartData: ChartDataSets[] = [];
  public barChartPlugins = [pluginDataLabels];
  public barChartColors = [
    {
      backgroundColor: ['rgba(150, 60, 200, 0.5)','rgba(30, 60, 250, 0.5)'],
      borderColor: ['rgba(150, 10, 25, 0.5)','rgba(50, 100, 250, 0.5)'],
    },
  ];

  chart = [];
  data = [];

  public chartupdate () {
    this._numero.fetchNumero()
    .subscribe(result => {

      
      let Decimal = result["decimal"]
      let Digit = result["digit"]
      let Normal = result["normal"]
      this.data.push (Decimal,Digit)


    })
    
  }

  public barChartData: ChartDataSets[] = [
    { data: this.data, label: 'Series A' },
  ];

  constructor(private _numero: NumeroService) {}

  ngOnInit() {this.chartupdate()}

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  DeleteLast(): void {
    this.data.length = 0;
  }

}
