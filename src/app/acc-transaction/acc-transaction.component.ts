
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acc-transaction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acc-transaction.component.html',
  styleUrls: ['./acc-transaction.component.css']
})
export class AccTransactionComponent {
  constructor(private router: Router) {}

  navigateToRecordTransaction() {
    this.router.navigate(['/record-transaction']);
  }
}
