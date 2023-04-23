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
import { ConfigurationEnterprisesComponent } from './configuration.enterprises.component';
import { ConfigurationEnterprisesRoutingModule } from './configuration.enterprises-routing.module';

@NgModule({
    imports: [
      CommonModule,
      ConfigurationEnterprisesRoutingModule,
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
      DividerModule
    ],
    declarations: [ConfigurationEnterprisesComponent]
  })
  export class ConfigurationEnterprisesModule { }