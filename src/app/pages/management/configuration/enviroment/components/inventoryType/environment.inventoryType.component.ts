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
  selector: 'app-environment-inventorytype',
  templateUrl: './environment.inventoryType.component.html',
  providers: [MessageService, ConfirmationService],
  styleUrls: ['./environment.inventoryType.component.scss'],
})
export class EnvironmentInventoryTypeComponent implements OnInit {
  config: AppConfig;
  items: MenuItem[];
  cols: any[];

  inventoryView: boolean = false;
  inventoryType: InventoryType;
  inventoryTypes: InventoryType[];
  inventoryTypeDialog: boolean;
  deactiveInventoryTypeDialog: boolean;
  activeInventoryTypeDialog: boolean;
  inventoryTypeSubmitted: boolean;

  constructor(
    public configService: ConfigService,
    private alertService: AlertService,
    private errorService: ErrorService,
    private app: AppComponent,
    private inventoryTypeService: InventoryTypeService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.config = this.configService.config;

    this.getInventoriesType();
  }

  getInventoriesType(){
    this.inventoryTypeService.getInventoryTypes().subscribe(data => {
      this.inventoryTypes = data;
    })
  }

  openNewInventoryType() {
    this.inventoryType = {};
    this.inventoryTypeSubmitted = false;
    this.inventoryTypeDialog = true;
  }

  editInventoryType(inventoryType: InventoryType) {
    this.inventoryType = {...inventoryType};
    this.inventoryTypeDialog = true;
  }

  inventoryTypeHideDialog() {
    this.inventoryTypeDialog = false;
    this.inventoryTypeSubmitted = false;
  }

  inventoryTypeDeactive(inventoryType: InventoryType) {
    this.deactiveInventoryTypeDialog = true;
    this.inventoryType = { ...inventoryType };
  }

  inventoryTypeActive(inventoryType: InventoryType) {
    this.activeInventoryTypeDialog = true;
    this.inventoryType = { ...inventoryType };
  }

  inventoryTypeConfirmDeactive() {
    this.deactiveInventoryTypeDialog = false;
    this.app.loading = true;
    this.inventoryTypeService.deactiveAccess(this.inventoryType.id).subscribe(data => {
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Usuário desativado', life: 3000});
      this.app.loading = false;
      this.getInventoriesType();
    }, err => {
        this.app.loading = false;
        this.errorService.validateError(err);
    });
  }

  inventoryTypeConfirmActive() {
    this.activeInventoryTypeDialog = false;
    this.app.loading = true;
    this.inventoryTypeService.activeAccess(this.inventoryType.id).subscribe(data => {
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Usuário ativado', life: 3000});
      this.app.loading = false;
      this.getInventoriesType();
    }, err => {
        this.app.loading = false;
        this.errorService.validateError(err);
    });
  }

  saveInventoryType() {
    this.inventoryTypeSubmitted = true;
    let inventoryType: InventoryType = {};
    inventoryType.id = this.inventoryType.id;
    inventoryType.name = this.inventoryType.name;

    this.app.loading = true;
    if(!inventoryType.id){
      this.inventoryTypeService.createInventoryType(inventoryType.name).subscribe(
        (data) => {
          if (data == true) {
            this.getInventoriesType();
            this.app.loading = false;
            this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Tipo criado', life: 3000});
            // this.searchList();
          }
        },
        (err) => {
          this.app.loading = false;
          this.errorService.validateError(err);
        }
      );
    } else {
      this.inventoryTypeService.updateInventoryType(inventoryType).subscribe(
        (data) => {
          if (data == true) {
            this.app.loading = false;
            this.getInventoriesType();
            this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Tipo atualizado', life: 3000});
            // this.searchList();
          }
        },
        (err) => {
          this.app.loading = false;
          this.errorService.validateError(err);
        }
      );
    }
    
  }
}
