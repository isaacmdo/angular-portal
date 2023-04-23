import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Profile } from "src/app/api/models/profile";

@Injectable()
export class ProfileService {

  private _module: string = "/api/profiles";

  constructor(private http: HttpClient) { }

  getProfiles(): Observable<Profile[]>{
    return this.http.get<Profile[]>("https://localhost:5001" + this._module );
  }
}
