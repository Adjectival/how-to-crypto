import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `

  <ul class="nav nav-pills nav-justified">
    <li class="nav-item">
        <a class="nav-link" href="https://colors-crypto.firebaseapp.com">
            <i class="fas fa-th-large"></i>
            Prices
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
      <a class="nav-link" href="mailto:alexd.jacks@gmail.com">
            <i class="fas fa-paper-plane"></i>
            Help?
        </a>
    </li>
  </ul>
<router-outlet></router-outlet>


<!--Body-->


<!--/Body-->

  `
})
export class AppComponent {
  title = 'app';
}
