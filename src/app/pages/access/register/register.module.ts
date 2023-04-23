import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { RegisterRoutingModule } from './register-routing.module';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {PasswordModule} from 'primeng/password';
import {CheckboxModule} from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';

@NgModule({
    imports: [
      CommonModule,
      RegisterRoutingModule,
      CardModule,
      ButtonModule,
      DropdownModule,
      FormsModule,
      InputTextModule,
      InputTextareaModule,
      PasswordModule,
      CheckboxModule,
      ToastModule
    ],
    declarations: [RegisterComponent]
  })
  export class RegisterModule { }