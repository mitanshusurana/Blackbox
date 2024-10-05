
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-record-transaction',
  standalone: true,
  imports: [FormsModule, NgSelectModule, ReactiveFormsModule, CommonModule],
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
    { id: 3, name: 'Party C' },
    { id: 0, name: 'Create Party' }
  ];

  constructor(private router: Router) {
    this.partyControl.valueChanges.subscribe(value => {
      this.checkParty(value);
    });
  }

  setTransactionType(type: string) {
    this.transaction.type = type;
    if (type === 'sale') {
        this.transaction.cashGiven = 0;
    } else if (type === 'purchase') {
        this.transaction.cashTaken = 0;
    }
  }

  onAddParty() {
    this.router.navigate(['/create-party']).then(() => {
      // Logic to return to the recording page after creating a new party
    });
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      alert('Please fill out all required fields.');
      return;
    }
    console.log('Transaction recorded:', this.transaction);
    this.resetForm();
  }

  calculateAmount() {
    this.transaction.amount = this.transaction.rate * (this.transaction.purity / 100) * this.transaction.weight;
  }

  checkParty(partyName: any) {
    if(partyName.name === "Create Party"){
      this.router.navigate(['/create-party']);
    }
    console.log('Checking party:', partyName);
    this.parties.forEach(party => console.log(party.name));
    const partyExists = this.parties.some(party => party.name === partyName.name);
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

  navigateToAccTransaction() {
    this.router.navigate(['/acc-transaction']);
  }
}

// This is a test comment to create a difference between branches
