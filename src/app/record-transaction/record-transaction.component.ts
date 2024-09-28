import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-record-transaction',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './record-transaction.component.html',
  styleUrls: ['./record-transaction.component.css']
})
export class RecordTransactionComponent {
  transaction = {
    type: '',
    description: '',
    amount: 0
  };

  onSubmit(form: NgForm) {
    console.log('Transaction recorded:', this.transaction);
    form.resetForm();
  }
}
