// import { DadosUsuarioModel } from './../../api/models/dadosUsuario';
// import { Router } from '@angular/router';
// import { UserModel } from '../../api/models/user';
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { MessageService } from 'primeng/api';
// import { environment } from '../../../environments/environment';

// let api: string = `${environment.apiUrl}/user`

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   tipoAcesso: string;
  
//   dadosUsuario: DadosUsuarioModel;

//   usuarioLogado: boolean;

//   constructor(private http: HttpClient, private router: Router, private messageService: MessageService) { 
//     this.usuarioLogado = false;
//   }

//   get(){
//     return this.http.get(`${api}/paises`);
//   }

  
//   login(user: UserModel){
//     return this.http.post(`${api}/login`, user)
//   }

//   setUsuarioLogado(logado: boolean) {
//     this.usuarioLogado = logado;
//   }
//   // .subscribe((data: any) => {
//   //   console.log(data)
//   //   debugger
//   //   if(data.token){
//   //     localStorage.setItem('user_logged', JSON.stringify(data));
//   //     this.router.navigateByUrl('');
//   //     this.usuarioLogado = true;
//   //     this.get();
//   //     this.showSuccess();
//   //     return data;
//   //     debugger
//   //   } else {
//   //     this.usuarioLogado = false;
//   //     this.showError();
//   //     return data;
//   //     debugger
//   //   } 
    
//   // });
//   showSuccess() {
//     this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
//   }

//   showError() {
//     this.messageService.add({severity:'error', summary: 'Error', detail: 'Message Content'});
//   }

// }


