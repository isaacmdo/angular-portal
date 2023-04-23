import { RegistrationsProductsComponent } from './registrations.products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

const routes: Routes = [
  {
    path: '',
    component: RegistrationsProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,  MenuModule, MenubarModule]
})
export class RegistrationsProductsRoutingModule { }
