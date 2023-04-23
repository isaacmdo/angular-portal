import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {CheckboxModule} from 'primeng/checkbox';
import {ToastModule} from 'primeng/toast';


@NgModule({
    imports: [
      CommonModule,
      LoginRoutingModule,
      CardModule,
      PasswordModule,
      ButtonModule,
      CheckboxModule,
      FormsModule,
      ToastModule
    ],
    declarations: [LoginComponent]
  })
  export class LoginModule { }