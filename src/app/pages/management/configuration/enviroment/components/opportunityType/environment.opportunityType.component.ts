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
import { OpportunityType } from 'src/app/api/models/opportunityType';
import { OpportunityTypeService } from 'src/app/service/database/opportunityTypes.service';

@Component({
  selector: 'app-environment-opportunityType',
  templateUrl: './environment.opportunityType.component.html',
  providers: [MessageService, ConfirmationService],
  styleUrls: ['./environment.opportunityType.component.scss'],
})
export class EnvironmentOpportunityTypeComponent implements OnInit {
  config: AppConfig;
  items: MenuItem[];
  cols: any[];

  opportunityView: boolean = false;
  opportunityType: OpportunityType;
  opportunityTypes: OpportunityType[];
  opportunityTypeDialog: boolean;
  deactiveOpportunityTypeDialog: boolean;
  activeOpportunityTypeDialog: boolean;
  opportunityTypeSubmitted: boolean;

  constructor(
    public configService: ConfigService,
    private alertService: AlertService,
    private errorService: ErrorService,
    private app: AppComponent,
    private opportunityTypeService: OpportunityTypeService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.config = this.configService.config;
    this.getOpportunitiesType();

  }

  getOpportunitiesType(){
    this.opportunityTypeService.getOpportunityTypes().subscribe(data => {
      this.opportunityTypes = data;
    })
  }

  openNewInventoryType() {
    this.opportunityType = {};
    this.opportunityTypeSubmitted = false;
    this.opportunityTypeDialog = true;
  }

  editInventoryType(inventoryType: OpportunityType) {
    this.opportunityType = {...inventoryType};
    this.opportunityTypeDialog = true;
  }

  opportunityTypeHideDialog() {
    this.opportunityTypeDialog = false;
    this.opportunityTypeSubmitted = false;
  }

  opportunityTypeDeactive(opportunityType: OpportunityType) {
    this.deactiveOpportunityTypeDialog = true;
    this.opportunityType = { ...opportunityType };
  }

  opportunityTypeActive(opportunityType: OpportunityType) {
    this.activeOpportunityTypeDialog = true;
    this.opportunityType = { ...opportunityType };
  }

  opportunityTypeConfirmDeactive() {
    this.deactiveOpportunityTypeDialog = false;
    this.app.loading = true;
    this.opportunityTypeService.deactiveAccess(this.opportunityType.id).subscribe(data => {
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Usuário desativado', life: 3000});
      this.app.loading = false;
      this.getOpportunitiesType();
    }, err => {
        this.app.loading = false;
        this.errorService.validateError(err);
    });
  }

  opportunityTypeConfirmActive() {
    this.activeOpportunityTypeDialog = false;
    this.app.loading = true;
    this.opportunityTypeService.activeAccess(this.opportunityType.id).subscribe(data => {
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Usuário ativado', life: 3000});
      this.app.loading = false;
      this.getOpportunitiesType();
    }, err => {
        this.app.loading = false;
        this.errorService.validateError(err);
    });
  }

  saveOpportunityType() {
    this.opportunityTypeSubmitted = true;
    let opportunityType: OpportunityType = {};
    opportunityType.id = this.opportunityType.id;
    opportunityType.name = this.opportunityType.name;

    this.app.loading = true;
    if(!opportunityType.id){
      this.opportunityTypeService.createOpportunityType(opportunityType.name).subscribe(
        (data) => {
          if (data == true) {
            this.getOpportunitiesType();
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
      this.opportunityTypeService.updateOpportunityType(opportunityType).subscribe(
        (data) => {
          if (data == true) {
            this.app.loading = false;
            this.getOpportunitiesType();
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
