import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ConfigurationEnvironmentComponent } from './configuration.environment.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationEnvironmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,  MenuModule, MenubarModule]
})
export class ConfigurationEnvironmentRoutingModule { }
