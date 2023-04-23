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
import { ConceptTypeService } from 'src/app/service/database/conceptsTypes.service';
import { ConceptType } from 'src/app/api/models/conceptType';

@Component({
  selector: 'app-environment-conceptType',
  templateUrl: './environment.conceptType.component.html',
  providers: [MessageService, ConfirmationService],
  styleUrls: ['./environment.conceptType.component.scss'],
})
export class EnvironmentConceptTypeComponent implements OnInit {
  config: AppConfig;
  items: MenuItem[];
  cols: any[];

  conceptView: boolean = false;
  conceptType: ConceptType;
  conceptTypes: ConceptType[];
  conceptTypeDialog: boolean;
  deactiveconceptTypeDialog: boolean;
  activeconceptTypeDialog: boolean;
  conceptTypeSubmitted: boolean;

  constructor(
    public configService: ConfigService,
    private alertService: AlertService,
    private errorService: ErrorService,
    private app: AppComponent,
    private conceptTypeService: ConceptTypeService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.config = this.configService.config;
    this.getConceptTypes();

  }

  getConceptTypes(){
    this.conceptTypeService.getConceptTypes().subscribe(data => {
      this.conceptTypes = data;
    })
  }

  openNewInventoryType() {
    this.conceptType = {};
    this.conceptTypeSubmitted = false;
    this.conceptTypeDialog = true;
  }

  editInventoryType(inventoryType: ConceptType) {
    this.conceptType = {...inventoryType};
    this.conceptTypeDialog = true;
  }

  conceptTypeHideDialog() {
    this.conceptTypeDialog = false;
    this.conceptTypeSubmitted = false;
  }

  conceptTypeDeactive(conceptType: ConceptType) {
    this.deactiveconceptTypeDialog = true;
    this.conceptType = { ...conceptType };
  }

  conceptTypeActive(conceptType: ConceptType) {
    this.activeconceptTypeDialog = true;
    this.conceptType = { ...conceptType };
  }

  conceptTypeConfirmDeactive() {
    this.deactiveconceptTypeDialog = false;
    this.app.loading = true;
    this.conceptTypeService.deactiveAccess(this.conceptType.id).subscribe(data => {
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Usuário desativado', life: 3000});
      this.app.loading = false;
      this.getConceptTypes();
    }, err => {
        this.app.loading = false;
        this.errorService.validateError(err);
    });
  }

  conceptTypeConfirmActive() {
    this.activeconceptTypeDialog = false;
    this.app.loading = true;
    this.conceptTypeService.activeAccess(this.conceptType.id).subscribe(data => {
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Usuário ativado', life: 3000});
      this.app.loading = false;
      this.getConceptTypes();
    }, err => {
        this.app.loading = false;
        this.errorService.validateError(err);
    });
  }

  saveconceptType() {
    this.conceptTypeSubmitted = true;
    let conceptType: ConceptType = {};
    conceptType.id = this.conceptType.id;
    conceptType.name = this.conceptType.name;

    this.app.loading = true;
    if(!conceptType.id){
      this.conceptTypeService.createConceptType(conceptType.name).subscribe(
        (data) => {
          if (data == true) {
            this.getConceptTypes();
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
      this.conceptTypeService.updateConceptType(conceptType).subscribe(
        (data) => {
          if (data == true) {
            this.app.loading = false;
            this.getConceptTypes();
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
