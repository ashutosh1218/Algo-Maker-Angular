import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './core/guard/auth.guard'

import { LogInComponent } from './components/log-in/log-in.component';
import { Login2Component } from './components/login2/login2.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './main-app/dashboard/dashboard.component';
import { PositionComponent } from './main-app/position/position.component';
import { StrategyComponent } from './main-app/strategy/strategy.component';
import { TradeComponent } from './main-app/trade/trade.component';
import {AccountComponent} from './main-app/account/account.component'
import { Page404Component } from './page404/page404.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {path:'login', component:Login2Component},
  {path:'register', component:RegisterComponent},
  {path:'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
  {path:'account', component:AccountComponent, canActivate: [AuthGuard]},
  {path:'position', component:PositionComponent, canActivate: [AuthGuard]},
  {path:'strategy', component:StrategyComponent, canActivate: [AuthGuard]},
  {path:'trade', component:TradeComponent, canActivate: [AuthGuard]},
  {path:"**", component:Page404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
