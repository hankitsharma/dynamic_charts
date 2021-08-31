import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartBarComponent } from './Chart-Bar/Chart-Bar.component';
import { JsonToTypescriptService } from './services/jsonToTypescript.service';
import { ChartLineComponent } from './Chart-Line/Chart-Line.component';
import { ChartDoughnutComponent } from './Chart-Doughnut/Chart-Doughnut.component';
import { HeaderComponent } from './header/header.component';

// Header
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

// Routing
import { RouterModule, Routes, ROUTES } from '@angular/router';
const routes: Routes = [
  { path : "Chart-Bar", component: ChartBarComponent},
  { path : "Chart-Doughnut", component: ChartDoughnutComponent},
  { path : "Chart-Line", component: ChartLineComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ChartBarComponent,
    ChartLineComponent,
    ChartDoughnutComponent,
    HeaderComponent,
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JsonToTypescriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
