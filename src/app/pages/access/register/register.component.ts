import { AppConfig } from '../../../api/models/appconfig';
import { ConfigService } from '../../../service/app.config.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/database/user.service';
import { AlertService } from 'src/app/service/database/alert.service';
import { ErrorService } from 'src/app/service/database/error.service';
import { AppComponent } from 'src/app/app.component';
import { UserLogin } from 'src/app/api/models/userLogin';
import { UserChangePassword } from 'src/app/api/models/userChangePassword';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  config: AppConfig;
  view: string = "login";
  user: UserLogin = {};

  constructor(public configService: ConfigService, private userService: UserService, private alertService: AlertService, private errorService: ErrorService, private app: AppComponent) { 
  
  }

  ngOnInit(): void {
    this.config = this.configService.config;
  }


  register() {    
    this.app.loading = true;
    this.userService.register(this.user).subscribe(data => {
      this.app.loading = false;
      this.alertService.showSucess("Your account has been created. Please activate by the e-mail we just sent you");      
    }, err => {
      this.app.loading = false;
      this.errorService.validateError(err);
    });
  }

}
