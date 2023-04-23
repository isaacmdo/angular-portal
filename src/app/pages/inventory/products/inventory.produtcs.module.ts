import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {PasswordModule} from 'primeng/password';
import {CheckboxModule} from 'primeng/checkbox';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {DividerModule} from 'primeng/divider';
import { InventoryProductsRoutingModule } from './inventory.produtcs-routing.module';
import { InventoryProductsComponent } from './inventory.produtcs.component';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ProductService } from 'src/app/service/mock/productservice';
import { ConfirmationService } from 'primeng/api';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {InputNumberModule} from 'primeng/inputnumber';

@NgModule({
    imports: [
      CommonModule,
      InventoryProductsRoutingModule,
      CardModule,
      ButtonModule,
      DropdownModule,
      FormsModule,
      InputTextModule,
      InputTextareaModule,
      PasswordModule,
      CheckboxModule,
      HttpClientModule,
      FileUploadModule,
      DividerModule,
      DialogModule,
      ConfirmDialogModule,
      ToolbarModule,
      ToastModule,
      TableModule,
      RadioButtonModule,
      RatingModule,
      InputNumberModule
    ],
    declarations: [InventoryProductsComponent]
  })
  export class InventoryProductsModule { }