import { CompaniesService } from './service/database/companies.service';
import { ConceptType } from './api/models/conceptType';
import { ProfileService } from './service/database/profile.service';
import { ErrorService } from './service/database/error.service';
import { SpeedDialModule } from 'primeng/speeddial';
import { Interceptor } from './service/database/config/app.interceptor.module';
import { LoginComponent } from './pages/access/login/login.component';
import { ErrorComponent } from './pages/utils/error/error.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFooterComponent } from './app.footer.component';
import { AppMainComponent } from './app.main.component';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { AppTopBarComponent } from './app.topbar.component';
import { ConfigService } from './service/app.config.service';
import { MenuService } from './service/app.menu.service';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { EmptyComponent } from './pages/utils/empty/empty.component';

import {SplitButtonModule} from 'primeng/splitbutton';
import {RippleModule} from 'primeng/ripple';
import { HomeComponent } from './pages/home/home.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserService } from './service/database/user.service';
import { AlertService } from './service/database/alert.service';
import { ModuleService } from './service/database/menu.service';
import { NgxLoadingModule } from "ngx-loading";
import { ProductService } from './service/mock/productservice';
import { InventoryTypeService } from './service/database/inventoryTypes.service';
import { OpportunityTypeService } from './service/database/opportunityTypes.service';
import { ConceptTypeService } from './service/database/conceptsTypes.service';
import { BusinessUnitService } from './service/database/businessUnit.service';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompaniesModule } from './components/companies/companies.module';


@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    AppTopBarComponent,
    AppFooterComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    EmptyComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MenuModule,
    MenubarModule,
    Interceptor,
    SplitButtonModule,
    SpeedDialModule,
    RippleModule,
    NgxLoadingModule.forRoot({})
    ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, 
                        MenuService, 
                        ConfigService, 
                        UserService, 
                        MessageService, 
                        ErrorService, 
                        AlertService, 
                        ModuleService, 
                        AppMenuComponent, 
                        ProductService, 
                        ConfirmationService, 
                        ProfileService, 
                        InventoryTypeService, 
                        OpportunityTypeService, 
                        ConceptTypeService, 
                        BusinessUnitService,
                        CompaniesService
                      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
