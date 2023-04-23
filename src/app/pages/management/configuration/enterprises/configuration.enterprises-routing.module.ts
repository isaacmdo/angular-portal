import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ConfigurationEnterprisesComponent } from './configuration.enterprises.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationEnterprisesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,  MenuModule, MenubarModule]
})
export class ConfigurationEnterprisesRoutingModule { }
