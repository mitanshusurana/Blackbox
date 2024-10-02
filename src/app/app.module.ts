
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AccTransactionComponent } from './acc-transaction/acc-transaction.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodaysTransactionsComponent } from './todays-transactions/todays-transactions.component';
import { CurrentStockSummaryComponent } from './current-stock-summary/current-stock-summary.component';
import { PartyLedgerComponent } from './party-ledger/party-ledger.component';
import { ProfitLossComponent } from './profit-loss/profit-loss.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    AccTransactionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgSelectModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'todays-transactions', loadComponent: () => import('./todays-transactions/todays-transactions.component').then(m => m.TodaysTransactionsComponent) },
      { path: 'current-stock-summary', loadComponent: () => import('./current-stock-summary/current-stock-summary.component').then(m => m.CurrentStockSummaryComponent) },
      { path: 'party-ledger', loadComponent: () => import('./party-ledger/party-ledger.component').then(m => m.PartyLedgerComponent) },
      { path: 'profit-loss', loadComponent: () => import('./profit-loss/profit-loss.component').then(m => m.ProfitLossComponent) },
      { path: 'record-transaction', loadComponent: () => import('./record-transaction/record-transaction.component').then(m => m.RecordTransactionComponent) },
      { path: 'create-party', loadComponent: () => import('./create-party/create-party.component').then(m => m.CreatePartyComponent) },
      { path: 'acc-transaction', loadComponent: () => import('./acc-transaction/acc-transaction.component').then(m => m.AccTransactionComponent) }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
