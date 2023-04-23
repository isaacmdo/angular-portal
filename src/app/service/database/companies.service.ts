import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BusinessUnit } from "src/app/api/models/businessUnit";
import { Company } from "src/app/api/models/company";

@Injectable()
export class CompaniesService {

  private _module: string = "/api/companiescomponent";

  constructor(private http: HttpClient) { }

  get(): Observable<Company[]> {
    return this.http.get<Company[]>("https://localhost:5001" + this._module);
  }

}
