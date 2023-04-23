import { FormsModule } from '@angular/forms';
import { ChangePassword } from './changepassword.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {CheckboxModule} from 'primeng/checkbox';
import {ToastModule} from 'primeng/toast';
import { ChangePasswordRoutingModule } from './changepassword-routing.module';


@NgModule({
    imports: [
      CommonModule,
      ChangePasswordRoutingModule,
      CardModule,
      PasswordModule,
      ButtonModule,
      CheckboxModule,
      FormsModule,
      ToastModule
    ],
    declarations: [ChangePassword]
  })
  export class ChangePasswordModule { }