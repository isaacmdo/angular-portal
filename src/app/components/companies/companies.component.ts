import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Company } from './../../api/models/company';
import { CompaniesService } from './../../service/database/companies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies-component',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  constructor(public companiesService: CompaniesService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }
  companies: Company[];
  company: Company;
  viewCompanyDialog: boolean = false;
  createCompanyDialog: boolean = false;
  editCompanyDialog: boolean = false;

  ngOnInit(): void {
    this.companiesService.get().subscribe(companies => this.companies = companies)
  }

  selectCompany(company: Company) {
    this.ref.close(company);
  }

  viewCompany(company: Company){
    this.company = company;
    this.viewCompanyDialog = true;
  }

  createCompany(company: Company){
    this.company = company;
    this.createCompanyDialog = true;
  }
}
