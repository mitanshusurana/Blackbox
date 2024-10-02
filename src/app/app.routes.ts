import { Routes } from '@angular/router';

import { CreatePartyComponent } from './create-party/create-party.component';
import { AccTransactionComponent } from './acc-transaction/acc-transaction.component';

export const routes: Routes = [
  { path: 'create-party', component: CreatePartyComponent },
  { path: 'acc-transaction', component: AccTransactionComponent }
];
