import { EnvironmentBusinessUnitComponent } from './components/businessUnit/environment.businessUnit.component';
import { EnvironmentInventoryTypeComponent } from './components/inventoryType/environment.inventoryType.component';
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
import { ConfigurationEnvironmentRoutingModule } from './configuration.environment-routing.module';
import { ConfigurationEnvironmentComponent } from './configuration.environment.component';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {DialogModule} from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { EnvironmentOpportunityTypeComponent } from './components/opportunityType/environment.opportunityType.component';
import { EnvironmentConceptTypeComponent } from './components/conceptType/environment.conceptType.component';
import { EnvironmentBusinessUnitModule } from './components/businessUnit/environment.businessUnit.module';
import { CompaniesModule } from 'src/app/components/companies/companies.module';

@NgModule({
    imports: [
      CommonModule,
      ConfigurationEnvironmentRoutingModule,
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
      CompaniesModule
    ],
    declarations: [ConfigurationEnvironmentComponent, EnvironmentInventoryTypeComponent, EnvironmentOpportunityTypeComponent, EnvironmentConceptTypeComponent, EnvironmentBusinessUnitComponent]
  })
  export class ConfigurationEnvironmentModule { }