import { Routes } from '@angular/router';

import { CreatePartyComponent } from './create-party/create-party.component';
import { loadComponent } from '@angular/core';
import { ProfitLossComponent } from './profit-loss/profit-loss.component';
import { TodaysTransactionsComponent } from './todays-transactions/todays-transactions.component';

export const routes: Routes = [
  { path: 'create-party', component: CreatePartyComponent },
  { path: 'acc-transaction', loadComponent: () => import('./acc-transaction/acc-transaction.component').then(m => m.AccTransactionComponent) },
  { path: 'profit-loss', component: ProfitLossComponent },
  { path: 'todays-transactions', component: TodaysTransactionsComponent }
];
