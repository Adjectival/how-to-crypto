import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
<!--Navbar-->
<mdb-navbar SideClass="navbar navbar-expand-lg navbar-dark indigo">
    <!-- Navbar brand -->
    <logo><a class="navbar-brand" href="#">How To Crypto</a></logo>
    <!-- Collapsible content -->
    <links>
        <!-- Links -->
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link waves-light" mdbRippleRadius>Buy Crypto</a>
            </li>
            <li class="nav-item">
                <a class="nav-link waves-light" mdbRippleRadius>Trade Crypto</a>
            </li>
            <li class="nav-item">
                <a class="nav-link waves-light" mdbRippleRadius>Crypto Prices</a>
            </li>
            <!-- Dropdown -->
            <li class="nav-item dropdown" dropdown>
                <a dropdownToggle mdbRippleRadius type="button" class="nav-link dropdown-toggle waves-light" mdbRippleRadius>
                Mine Crypto<span class="caret"></span></a>
                <div *dropdownMenu class="dropdown-menu dropdown dropdown-primary" role="menu">
                    <a class="dropdown-item waves-light" mdbRippleRadius href="#">Start Mining Now!</a>
                    <div class="divider dropdown-divider"></div>
                    <a class="dropdown-item waves-light" mdbRippleRadius href="#">Research mining rigs</a>
                    <a class="dropdown-item waves-light" mdbRippleRadius href="#">My humble rig</a>
                </div>
            </li>
            <li class="nav-item ">
                <a class="nav-link waves-light" mdbRippleRadius><a href="mailto:alexd.jacks@gmail.com" class="white-text">Email Me</a><span class="sr-only">(current)</span></a>
            </li>
        </ul>
        <!-- Links -->
    </links>
    <!-- Collapsible content -->
</mdb-navbar>
<!--/Navbar-->
              
<!--Body-->
  <div style="text-align:center" class="px-3">
    <h1 class="mt-5">How To Crypto Guide</h1>
    
    <h2 class="indigo-text">
      Welcome to a quick and easy guide on buying, trading, and mining cryptocurrency.
    </h2>
    <h2>
      Choose your topic here, or on the navigation bar at any time.
    </h2>
    <p>
    <button class="btn">
      Buy
    </button>
    <button class="btn">
      Trade
    </button>
    <button class="btn">
      Mine
    </button>
    </p>
    <h3>
      Please <a href="mailto:alexd.jacks@gmail.com">feel free to email me</a> with any questions you have about this guide!<br/>
      The <a href="mailto:alexd.jacks@gmail.com">Email Me</a> link in the nav menu will give you this option at any time. Enjoy!
    </h3>
  </div>
<!--/Body-->

  `
})
export class AppComponent {
  title = 'app';
}
