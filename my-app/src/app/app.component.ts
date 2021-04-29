import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { NumeroService } from './numerot.service';
import { HttpClient } from '@angular/common/http';
import * as Chart from 'chart.js';
import { catchError, retry, map } from 'rxjs/operators';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  
 
  title = 'my-app';
}
