import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-nav',
  template: ` <nav class="navbar  navbar-expand-lg bg-body-tertiary ">
    <div class="container-fluid" style="background-color: #5ab9c1">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul *ngFor="let nav of navData" class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">{{
              nav
            }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>`,
  styles: [``],
})
export class NavBarComponent implements OnInit {
  navData: Array<string> = [];

  constructor(private navService: NavbarService) {
    //empty
  }

  ngOnInit() {
    this.navData = this.navService.getData();
  }
}
