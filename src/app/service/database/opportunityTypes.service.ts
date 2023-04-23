import { OpportunityType } from 'src/app/api/models/opportunityType';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class OpportunityTypeService {

  private _module: string = "/api/opportunitytypeenvironment";

  constructor(private http: HttpClient) { }

  getOpportunityTypes(): Observable<OpportunityType[]> {
    return this.http.get<OpportunityType[]>("https://localhost:5001" + this._module);
  }

  createOpportunityType(name: String): Observable<Boolean> {
    return this.http.post<Boolean>("https://localhost:5001" + this._module, {Name: name});
  }

  updateOpportunityType(inventoryType: OpportunityType): Observable<Boolean> {
    return this.http.put<Boolean>("https://localhost:5001" + this._module, inventoryType);
  }

  deactiveAccess(userId: Number): Observable<OpportunityType> {    
    return this.http.get<OpportunityType>("https://localhost:5001" + this._module + "/deactivate/" + userId);
  }

  activeAccess(userId: Number): Observable<OpportunityType> {    
    return this.http.get<OpportunityType>("https://localhost:5001" + this._module + "/activate/" + userId);
  }
}
