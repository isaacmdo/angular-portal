import { RegistrationsProductsComponent } from './pages/registrations/registrations.products.component';
import { HomeComponent } from './pages/home/home.component';
import { AccessComponent } from './pages/utils/access/access.component';
import { NotfoundComponent } from './pages/utils/notfound/notfound.component';
import { ErrorComponent } from './pages/utils/error/error.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainComponent } from './app.main.component';
import { AuthGuard } from './guards/auth-guard';
import { ConfigurationEnterprisesComponent } from './pages/management/configuration/enterprises/configuration.enterprises.component';
import { ConfigurationProductsComponent } from './pages/management/configuration/products/configuration.produtcs.component';
import { InventoryProductsComponent } from './pages/inventory/products/inventory.produtcs.component';
import { DashboardGeneralComponent } from './pages/management/dashboard/general/dashboard.general.component';
import { ConfigurationEnvironmentComponent } from './pages/management/configuration/enviroment/configuration.environment.component';
import { ConfigurationStagesComponent } from './pages/management/configuration/stages/configuration.stages.component';
 
const routes: Routes = [ 
  { path: '', component: AppMainComponent,
    children: [
    { path: '', component: HomeComponent, 
      loadChildren: () => import('../app/pages/home/home.module').then(m => m.HomeModule),
      canActivate: [AuthGuard] 
    },
    { path: 'dashboard/general', component: DashboardGeneralComponent, 
    loadChildren: () => import('../app/pages/management/dashboard/general/dashboard.general.module').then(m => m.DashboardGeneralModule ),
      canActivate: [AuthGuard] 
    },
    { path: 'registrations/products', component: RegistrationsProductsComponent,
      loadChildren: () => import('./pages/registrations/registrations.products.module').then(m => m.RegistrationsProductsModule )
    },
    { path: 'config/enterprises', component: ConfigurationEnterprisesComponent,
      loadChildren: () => import('./pages/management/configuration/enterprises/configuration.enterprises.module').then(m => m.ConfigurationEnterprisesModule )
    },
    { path: 'config/environment', component: ConfigurationEnvironmentComponent,
      loadChildren: () => import('./pages/management/configuration/enviroment/configuration.environment.module').then(m => m.ConfigurationEnvironmentModule )
    },
    { path: 'config/products', component: ConfigurationProductsComponent,
      loadChildren: () => import('./pages/management/configuration/products/configuration.produtcs.module').then(m => m.ConfigurationProductsModule )
    },
    { path: 'config/stages', component: ConfigurationStagesComponent,
      loadChildren: () => import('./pages/management/configuration/stages/configuration.stages.module').then(m => m.ConfigurationStagesModule )
    },
    { path: 'inventory/products', component: InventoryProductsComponent,
      loadChildren: () => import('./pages/inventory/products/inventory.produtcs.module').then(m => m.InventoryProductsModule )
    },
    { path: 'users/access',
      loadChildren: () => import('./pages/management/users/access/users.access.module').then(m => m.UsersAccessModule )
    }
  ]},
  { path: 'error', component: ErrorComponent, canActivate: [AuthGuard] },
  { path: 'notfound', component: NotfoundComponent, canActivate: [AuthGuard] },
  { path: 'access', component: AccessComponent, canActivate: [AuthGuard] },
  { path: 'login',
    loadChildren: () => import('./pages/access/login/login.module').then(m => m.LoginModule ) 
  },
  { path: 'register',
    loadChildren: () => import('./pages/access/register/register.module').then(m => m.RegisterModule ) 
  },
  { path: 'changepassword',
  loadChildren: () => import('./pages/access/changepassword/changepassword.module').then(m => m.ChangePasswordModule ) 
  },
  { path: 'landing',
    loadChildren: () => import('./pages/utils/landing/landing.module').then(m => m.LandingModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', 
    anchorScrolling:'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
