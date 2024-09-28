import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profit-loss',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profit-loss.component.html',
  styleUrls: ['./profit-loss.component.css']
})
export class ProfitLossComponent {
  profitLossEntries = [
    { id: 1, description: 'Profit from Sales', amount: 5000 },
    { id: 2, description: 'Loss from Returns', amount: -1000 },
    { id: 3, description: 'Net Profit', amount: 4000 }
  ];
}
