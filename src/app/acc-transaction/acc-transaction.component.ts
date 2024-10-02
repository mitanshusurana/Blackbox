
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acc-transaction',
  templateUrl: './acc-transaction.component.html',
  styleUrls: ['./acc-transaction.component.css']
})
export class AccTransactionComponent {
  constructor(private router: Router) {}

  navigateToRecordTransaction() {
    this.router.navigate(['/record-transaction']);
  }
}
