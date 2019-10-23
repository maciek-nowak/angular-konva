import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {KonvaModule} from 'ng2-konva';
import { ChartsModule } from 'ng2-charts';
import {LineChartComponent} from './test-chart/line-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppTableComponent} from './table/app-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LineChartComponent,
    AppTableComponent
  ],
  imports: [
    BrowserModule,
    KonvaModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
