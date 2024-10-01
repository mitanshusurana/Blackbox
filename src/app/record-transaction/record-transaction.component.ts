
import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-record-transaction',
  standalone: true,
  imports: [FormsModule, NgSelectModule],
  templateUrl: './record-transaction.component.html',
  styleUrls: ['./record-transaction.component.css']
})
export class RecordTransactionComponent {
  transaction = {
    type: '',
    description: '',
    weight: 0,
    rate: 0,
    purity: 0,
    amount: 0,
    cashTaken: 0,
    cashGiven: 0,
    party: null
  };

  parties = [
    { id: 1, name: 'Party A' },
    { id: 2, name: 'Party B' },
    { id: 3, name: 'Party C' }
  ];

  constructor(private router: Router) {}

  setTransactionType(type: string) {
    this.transaction.type = type;
  }

  onAddParty() {
    this.router.navigate(['/create-party']).then(() => {
      // Logic to return to the recording page after creating a new party
    });
  }

  onSubmit(form: NgForm) {
    console.log('Transaction recorded:', this.transaction);
    form.resetForm();
  }

  calculateAmount() {
    this.transaction.amount = this.transaction.rate * (this.transaction.purity / 100) * this.transaction.weight;
  }

  checkParty() {
    const partyExists = this.parties.some(party => party.name === this.transaction.party);
    if (!partyExists) {
      this.router.navigate(['/create-party']);
    }
  }

  resetForm() {
    this.transaction = {
      type: '',
      description: '',
      weight: 0,
      rate: 0,
      purity: 0,
      amount: 0,
      cashTaken: 0,
      cashGiven: 0,
      party: null
    };
  }
}

// This is a test comment to create a difference between branches
