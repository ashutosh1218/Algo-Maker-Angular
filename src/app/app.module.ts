import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { Login2Component } from './components/login2/login2.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NavbarComponent} from './navbar/navbar.component' 
import {TradeComponent} from './main-app/trade/trade.component'
import {StrategyComponent} from './main-app/strategy/strategy.component'
import {DashboardComponent} from './main-app/dashboard/dashboard.component'
import {PositionComponent} from './main-app/position/position.component'
import { AccountComponent } from './main-app/account/account.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    Login2Component,
    RegisterComponent,
    NavbarComponent,
    DashboardComponent,
    TradeComponent,
    PositionComponent,
    StrategyComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule, 
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
