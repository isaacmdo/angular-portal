import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardGeneralComponent } from './dashboard.general.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardGeneralComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardGeneralRoutingModule { }
