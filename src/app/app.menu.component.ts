import { AppComponent } from 'src/app/app.component';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, AfterViewInit, Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Module } from './api/models/module';
import { ErrorService } from './service/database/error.service';
import { ModuleService } from './service/database/menu.service';
import { map, Observable, of } from "rxjs";

@Component({
    selector: 'app-menu',
    template: `
        <div class="layout-menu-container">
            <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
                
                <li app-menu class="layout-menuitem-category" *ngFor="let item of _modules; let i = index;" role="none">
                    <div class="layout-menuitem-root-text" [attr.aria-label]="[item.label]">{{item.label}}</div>
                    <ul role="menu">
                        <li app-menuitem *ngFor="let child of item.items" [item]="child" [index]="i" role="none"></li>
                    </ul>
                </li>
            </ul>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.Default
})
export class AppMenuComponent  {

    _modules: any[];
    _modulesDefault: any[] = [
      { name: 'Login', url: '/login'},
      { name: 'Landing', url: '/landing'},
      { name: 'Register', url: '/register'},
      { name: 'ChangePassword', url: '/changepassword'},
      { name: 'Error', url: '/error'},
      { name: 'Notfound', url: '/notfound'},
      { name: 'Access', url: '/access'}
    ];

    constructor(private moduleService: ModuleService, private router: Router,private errorService: ErrorService, private app: AppComponent,private cdr: ChangeDetectorRef) { 
        this.getModules()
    } 


    getModules() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd){
              if (localStorage.getItem(this.app.storageName)) {
                this.moduleService.getModules().pipe(
                    map(data => {
                        let model = [];
                        data.forEach(item => {
                            var menuItems = [];
                            for (let i = 0; i < item.moduleItem.length; i++) {
                             const menuItem = item.moduleItem[i];
                             var menus = [];
                             let urls = [];
                             for (let j = 0; j < menuItem.moduleMenu.length; j++) {
                                 const menu = menuItem.moduleMenu[j];
                                 menus[j] = {label: menu.name, icon: menu.icon, routerLink: [menu.url]};
                                 urls.push(menu.url);
                             }


                            menuItems[i] = {label: menuItem.name, icon: menuItem.icon, items: menus, routerLink: urls, routerLinkActiveOptions: { exact: true }}
                            }
                            
                            model.push(
                            {
                                label: item.name,
                                items: menuItems
                            }
                         );
                     })  
                        return model;
                       })
                ).subscribe(data => {
                  this._modules = data;
                  this.app.usuarioLogado = true;
                }, err => {
                  this.router.navigateByUrl("/login");
                  this.errorService.validateError(err);
                  this._modules = this._modulesDefault;
                  this.app.usuarioLogado = false;
                });
              }else{
                var _privateModule = this._modulesDefault.find(mod => mod.url ==event.url);

                this.app.usuarioLogado = false;
                if (!_privateModule) {
                    this.router.navigateByUrl('/landing');
                    this._modules = this._modulesDefault;
                }

              }
           }
            
        });
      } 

    onKeydown(event: KeyboardEvent) {
        const nodeElement = (<HTMLDivElement> event.target);
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
