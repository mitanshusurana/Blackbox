import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todays-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todays-transactions.component.html',
  styleUrls: ['./todays-transactions.component.css']
})
export class TodaysTransactionsComponent {
  transactions = [
    { id: 1, description: 'Transaction 1', amount: 100 },
    { id: 2, description: 'Transaction 2', amount: 200 },
    { id: 3, description: 'Transaction 3', amount: 300 }
  ];
}
