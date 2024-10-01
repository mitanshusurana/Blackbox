
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgForm, FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-record-transaction',
  standalone: true,
  imports: [FormsModule, NgSelectModule, ReactiveFormsModule],
  templateUrl: './record-transaction.component.html',
  styleUrls: ['./record-transaction.component.css']
})
export class RecordTransactionComponent {
  partyControl = new FormControl();
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

  constructor(private router: Router) {
    this.partyControl.valueChanges.subscribe(value => {
      this.checkParty(value);
    });
  }

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

  checkParty(partyName: string) {
    console.log('Checking party:', partyName);
    const partyExists = this.parties.some(party => party.name === partyName);
    console.log('Party exists:', partyExists);
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
