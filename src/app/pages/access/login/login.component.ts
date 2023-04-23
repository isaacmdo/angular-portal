import { AppMenuComponent } from '../../../app.menu.component';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfigService } from '../../../service/app.config.service';
import { AppConfig } from '../../../api/models/appconfig';
import { Subscription } from 'rxjs';
import {MessageService} from 'primeng/api';
import { UserLogin } from 'src/app/api/models/userLogin';
import { UserService } from 'src/app/service/database/user.service';
import { AppComponent } from 'src/app/app.component';
import { ErrorService } from 'src/app/service/database/error.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles:[`
    :host ::ng-deep .p-password input {
    width: 100%;
    padding:1rem;
    }

    :host ::ng-deep .pi-eye{
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }

    :host ::ng-deep .pi-eye-slash{
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }
  `]
})
export class LoginComponent {

  valCheck: string[] = ['remember'];

  usuario: string;

  password: string;

  user: UserLogin = {};
  
  config: AppConfig;

  usuarioLogado: boolean;
  
  subscription: Subscription;
  
  constructor(public configService: ConfigService, private userService: UserService, private router: Router, private app: AppComponent, private errorService: ErrorService, public menu: AppMenuComponent){ 
  }

  ngOnInit(): void {
    this.config = this.configService.config;
    this.subscription = this.configService.configUpdate$.subscribe(config => {
      this.config = config;
    });
  }

  authenticate() {
    this.app.loading = true;
    this.userService.authenticate(this.user).subscribe(data => {
      localStorage.setItem(this.app.storageName, JSON.stringify(data));
      this.router.navigateByUrl("/dashboard/general");
      this.app.loading = false;
    }, err => {
        this.app.loading = false;
        this.errorService.validateError(err);
    });
  }

}
