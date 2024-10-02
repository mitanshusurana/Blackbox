
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
  transaction = { type: '', subType: '', action: '', weight: 0, purity: 0, cashGiven: 0, cashTaken: 0 };

  constructor(private router: Router) {}

  setTransactionType(type: string) {
    this.transaction.type = type;
    this.navigateToRecordTransaction();
  }

  setSubType(subType: string) {
    this.transaction.subType = subType;
  }

  setAction(action: string) {
    this.transaction.action = action;
  }

  navigateToRecordTransaction() {
    if (this.transaction.type === 'sale' || this.transaction.type === 'purchase') {
      this.router.navigate(['/record-transaction']);
    }
  }

  navigateToAccTransaction() {
    this.transaction.type = 'account';
  }

  resetForm() {
    this.transaction = { type: '', subType: '', action: '', weight: 0, purity: 0, cashGiven: 0, cashTaken: 0 };
  }

  onSubmit(event: Event) {
    event.preventDefault();
    // Add logic to handle form submission
  }
}
