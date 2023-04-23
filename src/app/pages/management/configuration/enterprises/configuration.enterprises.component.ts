import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/database/user.service';
import { AlertService } from 'src/app/service/database/alert.service';
import { ErrorService } from 'src/app/service/database/error.service';
import { AppComponent } from 'src/app/app.component';
import { UserLogin } from 'src/app/api/models/userLogin';
import { UserChangePassword } from 'src/app/api/models/userChangePassword';
import { MenuItem } from 'primeng/api';
import { ConfigService } from 'src/app/service/app.config.service';
import { AppConfig } from 'src/app/api/models/appconfig';

@Component({
  templateUrl: './configuration.enterprises.component.html',
  styleUrls: ['./configuration.enterprises.component.scss']
})
export class ConfigurationEnterprisesComponent implements OnInit {
  config: AppConfig;
  items: MenuItem[];
  uploadedFiles: any[] = [];
  selectedCity1: any;
  cities: any[];

  constructor(public configService: ConfigService, private alertService: AlertService, private errorService: ErrorService, private app: AppComponent) { 
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
  }

  

  ngOnInit(): void {
    this.config = this.configService.config;

    this.items = [
        {
            label: 'Escolha cadastro',
            items: [{
                label: 'Produto',
                icon: 'pi pi-tag',
                url: 'http://angular.io'
            },
            {
                label: 'Pais',
                icon: 'pi pi-map',
                routerLink: '/fileupload'
            },
            {
                label: 'Cidade',
                icon: 'pi pi-map',
                routerLink: '/fileupload'
            },
            {
                label: 'Estado',
                icon: 'pi pi-map',
                routerLink: '/fileupload'
            }
        ]}
    ];
  }

  onUpload(event) {
    // for (const file of event.files) {
    //     this.uploadedFiles.push(file);
    // }

    this.alertService.showSucess("Arquivo enviado");
  }

}
