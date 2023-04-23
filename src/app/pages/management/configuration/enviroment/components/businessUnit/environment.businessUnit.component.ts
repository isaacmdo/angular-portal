import { CompaniesComponent } from './../../../../../../components/companies/companies.component';
import { Company } from './../../../../../../api/models/company';
import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/service/database/alert.service';
import { ErrorService } from 'src/app/service/database/error.service';
import { AppComponent } from 'src/app/app.component';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ConfigService } from 'src/app/service/app.config.service';
import { AppConfig } from 'src/app/api/models/appconfig';
import { BusinessUnit } from 'src/app/api/models/businessUnit';
import { BusinessUnitService } from 'src/app/service/database/businessUnit.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
@Component({
  selector: 'app-environment-businessUnit',
  templateUrl: './environment.businessUnit.component.html',
  providers: [MessageService, ConfirmationService, DialogService],
  styleUrls: ['./environment.businessUnit.component.scss'],
})
export class EnvironmentBusinessUnitComponent implements OnInit {
  config: AppConfig;
  items: MenuItem[];
  cols: any[];

  conceptView: boolean = false;
  businessUnit: BusinessUnit;
  businessUnits: BusinessUnit[];
  businessUnitDialog: boolean = false;
  deactiveBusinessUnitDialog: boolean = false;
  activeBusinessUnitDialog: boolean = false;
  businessUnitSubmitted: boolean = false;
  companySelectedDialog: boolean = false;
  company: Company;

  constructor(
    public configService: ConfigService,
    private alertService: AlertService,
    private errorService: ErrorService,
    private app: AppComponent,
    private businessUnitService: BusinessUnitService,
    private messageService: MessageService,
    public dialogService: DialogService
  ) {}

  ref: DynamicDialogRef;

  ngOnInit(): void {
    this.config = this.configService.config;
    this.getBusinessUnits();

  }

  getBusinessUnits(){
    this.businessUnitService.getBusinessUnits().subscribe(data => {
      this.businessUnits = data;
    })
  }

  openNewBusinessUnit() {
    this.businessUnit = {};
    this.businessUnitSubmitted = false;
    this.businessUnitDialog = true;
  }

  editBusinessUnit(businessUnit: BusinessUnit) {
    this.businessUnit = {...businessUnit};
    this.businessUnitDialog = true;
  }

  businessUnitHideDialog() {
    this.businessUnitDialog = false;
    this.businessUnitSubmitted = false;
  }

  businessUnitDeactive(businessUnit: BusinessUnit) {
    this.deactiveBusinessUnitDialog = true;
    this.businessUnit = { ...businessUnit };
  }

  businessUnitActive(businessUnit: BusinessUnit) {
    this.activeBusinessUnitDialog = true;
    this.businessUnit = { ...businessUnit };
  }

  businessUnitConfirmDeactive() {
    this.deactiveBusinessUnitDialog = false;
    this.app.loading = true;
    this.businessUnitService.deactiveAccess(this.businessUnit.id).subscribe(data => {
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Usuário desativado', life: 3000});
      this.app.loading = false;
      this.getBusinessUnits();
    }, err => {
        this.app.loading = false;
        this.errorService.validateError(err);
    });
  }

  businessUnitConfirmActive() {
    this.activeBusinessUnitDialog = false;
    this.app.loading = true;
    this.businessUnitService.activeAccess(this.businessUnit.id).subscribe(data => {
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Usuário ativado', life: 3000});
      this.app.loading = false;
      this.getBusinessUnits();
    }, err => {
        this.app.loading = false;
        this.errorService.validateError(err);
    });
  }

  saveBusinessUnit() {
    this.businessUnitSubmitted = true;
    this.companySelectedDialog = false;
    this.app.loading = true;
    if(this.company.id){
      this.businessUnitService.createBusinessUnit(this.company.id).subscribe(
        (data) => {
          if (data == true) {
            this.getBusinessUnits();
            this.app.loading = false;
            this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Tipo criado', life: 3000});
          }
        },
        (err) => {
          this.app.loading = false;
          this.errorService.validateError(err);
        }
      );
    } else {
      // this.businessUnitService.updateBusinessUnit(this.company).subscribe(
      //   (data) => {
      //     if (data == true) {
      //       this.app.loading = false;
      //       this.getBusinessUnits();
      //       this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Tipo atualizado', life: 3000});
      //       // this.searchList();
      //     }
      //   },
      //   (err) => {
      //     this.app.loading = false;
      //     this.errorService.validateError(err);
      //   }
      // );
    }
    
  }


  showCompanies() {
    this.ref = this.dialogService.open(CompaniesComponent, {
      header: 'Escolha uma empresa',
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000
    })

    this.ref.onClose.subscribe((company: Company) =>{
      if (company) {
          this.company = company;
          this.companySelectedDialog = true;
          //this.messageService.add({severity:'info', summary: `Empresa selecionada`, detail: company.name});
      }
  });
  }

  

  ngOnDestroy() {
    if (this.ref) {
        this.ref.close();
    }
  }
}
