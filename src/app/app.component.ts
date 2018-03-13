import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <!--Body-->

    <ul class="nav nav-pills nav-justified fixed-top">
      <li class="nav-item">
          <a class="nav-link" routerLink="home">
          <i class="far fa-question-circle"></i>
            What?
          </a>
      </li>
      <li class="nav-item">
          <a class="nav-link" routerLink="buy">
            <i class="far fa-money-bill-alt"></i>
             Buy
          </a>
      </li>
      <li class="nav-item">
          <a class="nav-link" routerLink="trade">
            <i class="fas fa-recycle"></i>
            Trade
          </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="mine">
            <i class="fab fa-monero"></i>
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
