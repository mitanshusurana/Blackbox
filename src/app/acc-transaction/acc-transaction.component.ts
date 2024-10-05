
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, NgForm } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-acc-transaction',
  standalone: true,
   imports: [CommonModule, FormsModule, ReactiveFormsModule, NgSelectModule],
  templateUrl: './acc-transaction.component.html',
  styleUrls: ['./acc-transaction.component.css']
})
export class AccTransactionComponent {
  transaction = { type: 'account', subType: '', action: '', weight: 0, purity: 100, cashGiven: 0, cashTaken: 0 }; // Set account as default
  parties = [
    { name: 'Party A' },
    { name: 'Party B' },
    { name: 'Party C' },
    { name: 'Party D' },
    { name: 'Party E' },
    { name: 'Party F' }
  ];
  partyControl = new FormControl();

  constructor(private router: Router) {}

  setTransactionType(type: string) {
    this.transaction.type = type;
    this.navigateToRecordTransaction();
  }

  setSubType(subType: string) {
    this.transaction.subType = subType;
    this.resetForm(); // Reset form when subType changes
  }

  setAction(action: string) {
    this.transaction.action = action;
    this.resetForm(); // Reset form when action changes
  }

  navigateToRecordTransaction() {
    if (this.transaction.type === 'sale' || this.transaction.type === 'purchase') {
      this.router.navigate(['/record-transaction']);
    }
  }

  navigateToAccTransaction() {
    this.transaction.type = 'account';
  }

  onAddParty() {
    // Logic to handle adding a new party
  }

  resetForm() {
    const { type, subType, action } = this.transaction;
    this.transaction = { type, subType, action, weight: 0, purity: 0, cashGiven: 0, cashTaken: 0 };
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      alert('Please fill out all required fields.');
      return;
    }
    console.log('Transaction recorded:', this.transaction);
    this.resetForm();
  }
}
