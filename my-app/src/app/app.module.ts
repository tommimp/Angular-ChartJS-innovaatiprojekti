import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from "ng2-charts";
import { HttpClientModule } from '@angular/common/http';
import { NumeroService } from './numerot.service';
import {MatCardModule} from '@angular/material/card';
import { LinechartComponent } from './linechart/linechart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
 





@NgModule({
  declarations: [
    AppComponent,
    LinechartComponent,
    PiechartComponent,
    BarchartComponent,
  ],
  imports: [ 
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    HttpClientModule,
    ChartsModule,
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [NumeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
