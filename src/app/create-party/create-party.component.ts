import { Component } from '@angular/core';

@Component({
  selector: 'app-create-party',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-party.component.html',
  styleUrls: ['./create-party.component.css']
})
export class CreatePartyComponent {
  party = {
    name: ''
  };

  onSubmit() {
    console.log('Party created:', this.party);
    // Logic to save the party
  }
}
