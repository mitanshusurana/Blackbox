import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  toggleDrawer() {
    const navbarMenu = document.querySelector('.navbar-menu');
    if (navbarMenu) {
      navbarMenu.classList.toggle('open');
    }
  }

  ngOnInit() {
    const navbarToggle = document.getElementById('navbar-toggle');
    if (navbarToggle) {
      navbarToggle.addEventListener('click', this.toggleDrawer);
    }
  }
}
