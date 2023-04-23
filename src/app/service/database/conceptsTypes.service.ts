import { ConceptType } from 'src/app/api/models/conceptType';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ConceptTypeService {

  private _module: string = "/api/conceptenvironment";

  constructor(private http: HttpClient) { }

  getConceptTypes(): Observable<ConceptType[]> {
    return this.http.get<ConceptType[]>("https://localhost:5001" + this._module);
  }

  createConceptType(name: String): Observable<Boolean> {
    return this.http.post<Boolean>("https://localhost:5001" + this._module, {Name: name});
  }

  updateConceptType(conceptType: ConceptType): Observable<Boolean> {
    return this.http.put<Boolean>("https://localhost:5001" + this._module, conceptType);
  }

  deactiveAccess(conceptId: Number): Observable<ConceptType> {    
    return this.http.get<ConceptType>("https://localhost:5001" + this._module + "/deactivate/" + conceptId);
  }

  activeAccess(conceptId: Number): Observable<ConceptType> {    
    return this.http.get<ConceptType>("https://localhost:5001" + this._module + "/activate/" + conceptId);
  }
}
