import { Routes } from '@angular/router';

import { CreatePartyComponent } from './create-party/create-party.component';
import { loadComponent } from '@angular/core';

export const routes: Routes = [
  { path: 'create-party', component: CreatePartyComponent },
  { path: 'acc-transaction', loadComponent: () => import('./acc-transaction/acc-transaction.component').then(m => m.AccTransactionComponent) }
];
