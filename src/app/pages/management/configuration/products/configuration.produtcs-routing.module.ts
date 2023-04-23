import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ConfigurationProductsComponent } from './configuration.produtcs.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,  MenuModule, MenubarModule]
})
export class ConfigurationProductsRoutingModule { }
