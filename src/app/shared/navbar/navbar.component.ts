
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
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
