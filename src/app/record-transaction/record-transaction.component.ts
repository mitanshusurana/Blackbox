
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
    amount: 0,
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

  resetForm() {
    this.transaction = {
      type: '',
      description: '',
      amount: 0,
      party: null
    };
  }
}

// This is a test comment to create a difference between branches
