import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxDataGridModule } from "devextreme-angular";
import { DxCheckBoxModule } from "devextreme-angular";
import { ChartComponent } from './components/chart/chart.component';
import { GridComponent } from './components/grid/grid.component';
import { DxChartModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    DxCheckBoxModule,
    DxChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
