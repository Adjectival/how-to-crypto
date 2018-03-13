import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <!--Body-->

    <ul class="nav nav-pills nav-justified">
      <li class="nav-item">
          <a class="nav-link" routerLink="home">
              What?
          </a>
      </li>
      <li class="nav-item">
          <a class="nav-link" routerLink="buy">
              Buy
          </a>
      </li>
      <li class="nav-item">
          <a class="nav-link" routerLink="trade">
              Trade
          </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="mine">
              Mine
          </a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="https://colors-crypto.firebaseapp.com">
              <i class="fas fa-th-large"></i>
              Prices
          </a>
      </li>
    </ul>

    <router-outlet>
    </router-outlet>
    <!--/Body-->
  `
})
export class AppComponent {
  title = 'app';
}
