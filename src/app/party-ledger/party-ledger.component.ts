import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-party-ledger',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './party-ledger.component.html',
  styleUrls: ['./party-ledger.component.css']
})
export class PartyLedgerComponent {
  ledgerEntries = [
    { id: 1, party: 'Party A', amount: 1000 },
    { id: 2, party: 'Party B', amount: 2000 },
    { id: 3, party: 'Party C', amount: 1500 }
  ];
}
