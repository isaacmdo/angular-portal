import { Profile } from './../../../../api/models/profile';
import { User } from './../../../../api/models/user';
import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/database/user.service';
import { AlertService } from 'src/app/service/database/alert.service';
import { ErrorService } from 'src/app/service/database/error.service';
import { AppComponent } from 'src/app/app.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfigService } from 'src/app/service/app.config.service';
import { AppConfig } from 'src/app/api/models/appconfig';
import { ProductService } from 'src/app/service/mock/productservice';
import { ProfileService } from 'src/app/service/database/profile.service';
import { Observable } from "rxjs";
import { UpdateAccessModel } from 'src/app/api/models/updateaccess';

@Component({
  selector: 'app-page-access',
  templateUrl: './users.access.component.html',
  providers: [MessageService, ConfirmationService],
  styleUrls: ['./users.access.component.scss']
})
export class UsersAccessComponent implements OnInit {
  config: AppConfig;
  userDialog: boolean;

  deactiveUserDialog: boolean = false;
  activeUserDialog: boolean = false;

  
  users: User[];

  user: User;

  submitted: boolean;

  cols: any[];

  profiles: Observable<Profile[]> = this.profilesService.getProfiles();

  rowsPerPageOptions = [5, 10, 20];

  constructor(public configService: ConfigService, private alertService: AlertService, private errorService: ErrorService, private app: AppComponent, private productService: ProductService, private messageService: MessageService,
    private confirmationService: ConfirmationService, private usersService: UserService, private profilesService: ProfileService) { 
 
  }

  

  ngOnInit(): void {
    this.config = this.configService.config;
    this.searchList();
  }

  searchList(): void {
  let users = this.usersService.getUsers().subscribe(data => {
    this.users = data;
  });

  this.cols = [
    {field: 'Código', header: 'id'},
    {field: 'Nome', header: 'name'},
    {field: 'Email', header: 'email'},
    {field: 'Perfil', header: 'profile'}
  ];
}

openNew() {
  this.user = {};
  this.submitted = false;
  this.userDialog = true;
}

editUser(user: User) {
    this.user = {...user};
    this.userDialog = true;
}

deactiveUser(user: User) {
    this.deactiveUserDialog = true;
    this.user = {...user};
}

confirmDelete(){
    this.deactiveUserDialog = false;
    this.app.loading = true;
    this.usersService.deactiveAccess(this.user.id).subscribe(data => {
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Usuário desativado', life: 3000});
      this.app.loading = false;
      this.searchList();
    }, err => {
        this.app.loading = false;
        this.errorService.validateError(err);
    });
}

activeUser(user: User) {
  this.activeUserDialog = true;
  this.user = {...user};
}

confirmActive(){
  this.activeUserDialog = false;
  this.app.loading = true;
  this.usersService.activeAccess(this.user.id).subscribe(data => {
    this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Usuário ativado', life: 3000});
    this.app.loading = false;
    this.searchList();
  }, err => {
      this.app.loading = false;
      this.errorService.validateError(err);
  });
}


hideDialog() {
    this.userDialog = false;
    this.submitted = false;
}

saveUser() {
    this.submitted = true;
    let access: UpdateAccessModel = {};
    access.id = this.user.id;
    access.email = this.user.email;
    access.name = this.user.name;
    access.profileId = this.user.profile.id;
    this.app.loading = true;
    this.usersService.updateAccess(access).subscribe(data => {
      if(data == true){
        this.app.loading = false;
        this.messageService.add({severity: 'success', summary: 'Sucesso', detail: `Usuário ${access.name} atualizado`, life: 3000});
        this.searchList();
      }
    }, err => {
      this.app.loading = false;
      this.errorService.validateError(err);
    });
}

findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id === id) {
            index = i;
            break;
        }
    }

    return index;
}

}
