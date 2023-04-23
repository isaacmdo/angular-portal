import { MenuModule } from 'primeng/menu';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardGeneralRoutingModule } from './dashboard.general-routing.module';
import { ChartModule } from 'primeng/chart';
import { DashboardGeneralComponent } from './dashboard.general.component';



@NgModule({
    imports: [
      CommonModule,
      DashboardGeneralRoutingModule,
      FormsModule,
      ChartModule,
      MenuModule
    ],
    declarations: [DashboardGeneralComponent]
  })
  export class DashboardGeneralModule { }