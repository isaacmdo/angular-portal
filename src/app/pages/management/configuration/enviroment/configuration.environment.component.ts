import { EnvironmentInventoryTypeComponent } from './components/inventoryType/environment.inventoryType.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/database/user.service';
import { AlertService } from 'src/app/service/database/alert.service';
import { ErrorService } from 'src/app/service/database/error.service';
import { AppComponent } from 'src/app/app.component';
import { UserLogin } from 'src/app/api/models/userLogin';
import { UserChangePassword } from 'src/app/api/models/userChangePassword';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ConfigService } from 'src/app/service/app.config.service';
import { AppConfig } from 'src/app/api/models/appconfig';
import { InventoryType } from 'src/app/api/models/inventoryType';
import { InventoryTypeService } from 'src/app/service/database/inventoryTypes.service';

@Component({
  templateUrl: './configuration.environment.component.html',
  providers: [MessageService, ConfirmationService],
  styleUrls: ['./configuration.environment.component.scss'],
})
export class ConfigurationEnvironmentComponent implements OnInit {
  config: AppConfig;
  items: MenuItem[];

  inventoryView: boolean = false;
  opportunityView: boolean = false;
  conceptView: boolean = false;
  businessUnitView: boolean = false;

  constructor(
    public configService: ConfigService
    ) {}

  ngOnInit(): void {
    this.config = this.configService.config;

    this.items = [
      {
        label: 'Inventários',
        icon: 'pi pi-shopping-bag',
        command: () => {
          this.opportunityView = false;
          this.conceptView = false;
          this.businessUnitView = false;
          this.inventoryView = true;
        },
      },
      {
        label: 'Oportunidades',
        icon: 'pi pi-cart-plus',
        command: () => {
          this.opportunityView = true;
          this.conceptView = false;
          this.businessUnitView = false;
          this.inventoryView = false;
        },
      },
      {
        label: 'Conceitos',
        icon: 'pi pi-ticket',
        command: () => {
          this.opportunityView = false;
          this.conceptView = true;
          this.businessUnitView = false;
          this.inventoryView = false;
        },
      },
      {
        label: 'Unidades',
        icon: 'pi pi-globe',
        command: () => {
          this.opportunityView = false;
          this.conceptView = false;
          this.businessUnitView = true;
          this.inventoryView = false;
        },
      },
    ];
  }
}
