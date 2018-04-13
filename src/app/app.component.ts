import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
<!--Body-->
    <!--Navbar-->
        <mdb-navbar SideClass="navbar navbar-expand-lg navbar-dark indigo">

        <!-- Navbar brand -->
        <logo><a class="navbar-brand" href="#">HowToCrypto</a></logo>

        <!-- Collapsible content -->
        <links>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">

              <a class="nav-link waves-light" mdbRippleRadius routerLink="home">
              <span class="sr-only">(current)</span>
              <i class="far fa-question-circle"></i>
                What?
              </a>
          </li>
          <li class="nav-item">

              <a class="nav-link waves-light" mdbRippleRadius routerLink="buy">

                <i class="far fa-money-bill-alt"></i>
                 Buy
              </a>
          </li>
          <li class="nav-item">

              <a class="nav-link waves-light" mdbRippleRadius routerLink="trade">

                <i class="fas fa-recycle"></i>
                Trade
              </a>
          </li>
          <li class="nav-item">

            <a class="nav-link waves-light" mdbRippleRadius routerLink="mine">

                <i class="fab fa-monero"></i>
                Mine
              </a>
          </li>
          <li class="nav-item">

              <a class="nav-link waves-light" mdbRippleRadius href="https://colors-crypto.firebaseapp.com">

                <i class="fas fa-th-large"></i>
                Prices
              </a>
          </li>



        <!-- Dropdown -->
          <li class="nav-item dropdown" dropdown>
            <a dropdownToggle mdbRippleRadius type="button" class="nav-link dropdown-toggle waves-light" mdbRippleRadius>
                <i class="fas fa-th-large"></i>
                Mining Tools
                <span class="caret"></span>
            </a>
              <div *dropdownMenu class="dropdown-menu dropdown dropdown-primary" role="menu">
                <a class="dropdown-item waves-light"
                mdbRippleRadius
                href="http://www.mycryptobuddy.com/GPUProfitability">
                    GPU Calculator
                </a>
                <a class="dropdown-item waves-light"
                mdbRippleRadius
                href="https://www.cryptocompare.com/mining/calculator/eth?HashingPower=110&HashingUnit=MH%2Fs&PowerConsumption=600&CostPerkWh=0.12&MiningPoolFee=1">
                    Electric Calculator
                </a>
                <div class="divider dropdown-divider"></div>
                <a class="dropdown-item waves-light"
                mdbRippleRadius
                href="https://www.reddit.com/r/cryptomining/
                ">
                    /r/CryptoMining
                </a>
              </div>
          </li>

        </ul>

        </links>
       <!-- Collapsible content -->

    </mdb-navbar>
    <!--/.Navbar-->

<!--/Body-->
  `
})
export class AppComponent {
  title = 'app';
}
