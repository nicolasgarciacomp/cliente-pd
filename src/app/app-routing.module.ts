import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/auth.guard';

import { HomeComponent } from './components/home/home.component';
import { Cuentas_asientoComponent } from './components/cuentas_asiento/cuentas_asiento.component';
import { Cuentas_contablesComponent } from './components/cuentas_contables/cuentas_contables.component';
import { Detalle_asientoComponent } from './components/detalle_asiento/detalle_asiento.component';
import { CallbackComponent } from './components/callback/callback.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { 
    path: 'cuentas_asiento',
    component: Cuentas_asientoComponent,
    canActivate: [ AuthGuard ]
  },
  { 
    path: 'cuentas_contables',
    component: Cuentas_contablesComponent,
    canActivate: [ AuthGuard ]
  },
  { 
    path: 'detalle_asiento',
    component: Detalle_asientoComponent,
    canActivate: [ AuthGuard ]
  },
  { path: 'callback', component: CallbackComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
