import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {CheckboxModule} from 'primeng/checkbox';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import {DividerModule} from 'primeng/divider';
import {RippleModule} from 'primeng/ripple';


@NgModule({
    imports: [
      CommonModule,
      LandingRoutingModule,
      CardModule,
      PasswordModule,
      ButtonModule,
      CheckboxModule,
      FormsModule,
      DividerModule,
      RippleModule,
      FormsModule
    ],
    declarations: [LandingComponent]
  })
  export class LandingModule { }