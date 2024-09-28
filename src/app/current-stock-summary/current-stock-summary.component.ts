import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-stock-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-stock-summary.component.html',
  styleUrls: ['./current-stock-summary.component.css']
})
export class CurrentStockSummaryComponent {
  stockItems = [
    { id: 1, name: 'Item 1', quantity: 50 },
    { id: 2, name: 'Item 2', quantity: 30 },
    { id: 3, name: 'Item 3', quantity: 20 }
  ];
}
