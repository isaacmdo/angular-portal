import { Component, OnDestroy } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { ConfigService } from './service/app.config.service';
import { AppConfig } from './api/models/appconfig';
import { Router } from '@angular/router';
import { UserService } from './service/database/user.service';
import { AppComponent } from './app.component';

@Component({
    selector: 'app-topbar',
    styles: [`
    :host {
            ::ng-deep .p-menubar.p-component {
                background-color: white !important;
                border: none !important;
                }
          }   
    `],
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items: MenuItem[];

    scale: number = 12;

    scales: any[] = [12, 13, 14, 15, 16];

    config: AppConfig;

    subscription: Subscription;

    nestedItems: any[];

    constructor(public appMain: AppMainComponent, public configService: ConfigService, private router: Router, private userService: UserService, private app: AppComponent) { 
        this.items = [{
            label: 'Meu perfil',
            items: [
                {label: 'Configurações', icon: 'pi pi-cog', routerLink: '/dashboard'},
                {label: 'Sair', icon: 'pi pi-power-off', command: () => {
                    this.logout();
                }},
            ]
        }];
    }

    ngOnInit() {
        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe(config => {
            this.config = config;
            this.scale = 12;
            this.applyScale();
        });
    }

    incrementScale() {
        this.scale++;
        this.applyScale();
    }

    decrementScale() {
        this.scale--;
        this.applyScale();
    }

    applyScale() {
        document.documentElement.style.fontSize = this.scale + 'px';
    }

    logout(){
        this.app.loading = true;
        localStorage.removeItem(this.app.storageName);
        this.router.navigateByUrl("/login");
        this.app.loading = false;
    }
}
