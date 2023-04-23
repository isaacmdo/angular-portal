import { AlertService } from 'src/app/service/database/alert.service';
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
import { UserChangePassword } from 'src/app/api/models/userChangePassword';


@Component({
  selector: 'app-login',
  templateUrl: './changepassword.component.html',
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
export class ChangePassword {

  valCheck: string[] = ['remember'];

  usuario: string;

  user: UserLogin = {};
  
  config: AppConfig;

  usuarioLogado: boolean;
  
  subscription: Subscription;

  view = "sendcode";

  userChangePassword: UserChangePassword = {};

  constructor(public configService: ConfigService, private userService: UserService, private router: Router, private app: AppComponent, private errorService: ErrorService, public menu: AppMenuComponent, public alertService: AlertService){ 
  }

  ngOnInit(): void {
    this.config = this.configService.config;
    this.subscription = this.configService.configUpdate$.subscribe(config => {
      this.config = config;
    });
  }

  sendCode(){
    this.app.loading = true;
    this.userService.forgotPassword(this.user.email).subscribe(data => {
      this.alertService.showSucess("Enviamos um email com o código de verificação");    
      this.userChangePassword.email = this.user.email;
      this.view = 'changePassword';
      this.app.loading = false;
    }, err => {
        this.errorService.validateError(err);
        this.app.loading = false;
    });
  }


  changePassword(){
    this.app.loading = true;
    this.userService.changePassword(this.userChangePassword).subscribe(data => {
      this.alertService.showSucess("Sua senha foi alterada com sucesso");      
      this.view = 'passwordChanged';
      this.app.loading = false;
    }, err => {
        this.errorService.validateError(err);
        this.app.loading = false;
    });
  }



}
