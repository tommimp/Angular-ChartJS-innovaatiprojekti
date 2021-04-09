import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from "ng2-charts";
import { HttpClientModule } from '@angular/common/http';
import { NumeroService } from './numerot.service';
import {MatCardModule} from '@angular/material/card';
import { LinechartComponent } from './linechart/linechart.component';




@NgModule({
  declarations: [
    AppComponent,
    LinechartComponent,
  ],
  imports: [ 
    MatCardModule,
    HttpClientModule,
    ChartsModule,
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [NumeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
