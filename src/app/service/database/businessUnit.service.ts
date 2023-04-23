import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BusinessUnit } from "src/app/api/models/businessUnit";
import { Company } from "src/app/api/models/company";

@Injectable()
export class BusinessUnitService {

  private _module: string = "/api/businessunitenvironment";

  constructor(private http: HttpClient) { }

  getBusinessUnits(): Observable<BusinessUnit[]> {
    return this.http.get<BusinessUnit[]>("https://localhost:5001" + this._module);
  }

  createBusinessUnit(companyId: Number): Observable<Boolean> {
    return this.http.post<Boolean>("https://localhost:5001" + this._module, {CompanyId: companyId});
  }

  updateBusinessUnit(businessUnit: BusinessUnit): Observable<Boolean> {
    return this.http.put<Boolean>("https://localhost:5001" + this._module, businessUnit);
  }

  deactiveAccess(businessUnitId: Number): Observable<BusinessUnit> {    
    return this.http.get<BusinessUnit>("https://localhost:5001" + this._module + "/deactivate/" + businessUnitId);
  }

  activeAccess(businessUnitId: Number): Observable<BusinessUnit> {    
    return this.http.get<BusinessUnit>("https://localhost:5001" + this._module + "/activate/" + businessUnitId);
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>("https://localhost:5001" + this._module + "/companies");
  }
}
