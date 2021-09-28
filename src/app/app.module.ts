import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { Cuentas_asientoComponent } from './components/cuentas_asiento/cuentas_asiento.component';
import { Cuentas_contablesComponent } from './components/cuentas_contables/cuentas_contables.component';
import { Detalle_asientoComponent } from './components/detalle_asiento/detalle_asiento.component';
import { CallbackComponent } from './components/callback/callback.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    Cuentas_asientoComponent,
    Cuentas_contablesComponent,
    Detalle_asientoComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
