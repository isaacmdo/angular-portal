import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/api/models/user";
import { UserAuthenticated } from "src/app/api/models/userAuthenticated";
import { UserChangePassword } from "src/app/api/models/userChangePassword";
import { UserLogin } from "src/app/api/models/userLogin";

@Injectable()
export class UserService {

  private _module: string = "/api/users";

  constructor(private http: HttpClient) { }

  authenticate(user: UserLogin): Observable<UserAuthenticated> {
    return this.http.post<UserAuthenticated>("https://localhost:5001" + this._module + "/authenticate", user);
  }

  register(user: UserLogin): Observable<UserAuthenticated> {
    return this.http.post<UserAuthenticated>("https://localhost:5001" + this._module, user);
  }

  forgotPassword(email: string): Observable<boolean> {
    return this.http.get<boolean>("https://localhost:5001" + this._module + "/forgot-password/" + email);
  }

  changePassword(data: UserChangePassword): Observable<boolean> {
    return this.http.post<boolean>("https://localhost:5001" + this._module + "/change-password", data);
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>("https://localhost:5001" + this._module );
  }

  update(user: User): Observable<User> {    
    return this.http.put<User>("https://localhost:5001" + this._module, user);
  }

  updateAccess(user: User): Observable<Boolean> {    
    return this.http.put<Boolean>("https://localhost:5001" + this._module + "/updateaccess", user);
  }

  deactiveAccess(userId: Number): Observable<User> {    
    return this.http.get<User>("https://localhost:5001" + this._module + "/deactivate/" + userId);
  }

  activeAccess(userId: Number): Observable<User> {    
    return this.http.get<User>("https://localhost:5001" + this._module + "/activate/" + userId);
  }
}
