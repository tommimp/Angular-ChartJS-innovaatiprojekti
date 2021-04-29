import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { NumeroService } from '../numerot.service';
import { interval } from 'rxjs';


@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public pieChartLabels: Label[] = ['Aloitusarvo'];
  public pieChartType: ChartType = 'pie';
  public pieChartData: ChartDataSets[] = [];
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(150, 60, 200, 0.5)','rgba(30, 60, 250, 0.5)','rgba(250, 150, 200, 0.5)'],
      borderColor: ['rgba(150, 10, 25, 0.5)','rgba(50, 100, 250, 0.5)','rgba(250, 150, 200, 0.5)'],
    },
  ];

  chart = [];
  data1 = [];
  data2 = [];
  data3 = [];

  public datahaku () {
    this._numero.fetchNumero()
    .subscribe(result => {

      
      let Decimal = result["decimal"]
      this.data1.push (Decimal)

      let Digit = result["digit"]
      this.data2.push (Digit)

      let Normal = result["normal"]
      this.data3.push (Normal)

      

    })
    
  }



  constructor(private _numero: NumeroService) {}

  ngOnInit() {this.datahaku()}

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  ToNormal(): void {
    this.pieChartData = this.data3;
    this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
  }
  ToDigit(): void {
    this.pieChartData = this.data2;
    this.pieChartColors[0].backgroundColor.push('rgba(50,250,60,0.3)');
  }
  ToDecimal(): void {
    this.pieChartData = this.data1;
    this.pieChartColors[0].backgroundColor.push('rgba(250,10,60,0.3)');
  }
  PoistaData(): void {
    this.data1.pop();
    this.data2.pop();
    this.data3.pop();
    this.pieChartColors[0].backgroundColor.pop();
  }

}
