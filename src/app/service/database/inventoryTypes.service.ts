import { InventoryType } from 'src/app/api/models/inventoryType';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class InventoryTypeService {

  private _module: string = "/api/inventorytypeenvironment";

  constructor(private http: HttpClient) { }

  getInventoryTypes(): Observable<InventoryType[]> {
    return this.http.get<InventoryType[]>("https://localhost:5001" + this._module);
  }

  createInventoryType(name: String): Observable<Boolean> {
    return this.http.post<Boolean>("https://localhost:5001" + this._module, {Name: name});
  }

  updateInventoryType(inventoryType: InventoryType): Observable<Boolean> {
    return this.http.put<Boolean>("https://localhost:5001" + this._module, inventoryType);
  }

  deactiveAccess(userId: Number): Observable<InventoryType> {    
    return this.http.get<InventoryType>("https://localhost:5001" + this._module + "/deactivate/" + userId);
  }

  activeAccess(userId: Number): Observable<InventoryType> {    
    return this.http.get<InventoryType>("https://localhost:5001" + this._module + "/activate/" + userId);
  }
}
