import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { InventoryProductsComponent } from './inventory.produtcs.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,  MenuModule, MenubarModule]
})
export class InventoryProductsRoutingModule { }
