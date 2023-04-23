import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {DialogModule} from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { CompaniesComponent } from 'src/app/components/companies/companies.component';

@NgModule({
    imports: [
      CommonModule,
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
      TableModule,
      ToolbarModule,
      DialogModule,
      ToastModule,
      MenuModule, 
      MenubarModule
    ],
  entryComponents: [
      CompaniesComponent
   ],
    // declarations: [EnvironmentInventoryTypeComponent]
  })
  export class EnvironmentBusinessUnitModule { }