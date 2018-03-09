import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `


<!--Body-->

<div class="col-md-4 mt-5 text mx-auto">

    <!--Card-->
    <div class="card card-cascade narrower">

        <!--Card image-->
        <div class="view overlay hm-white-slight waves-light" mdbRippleRadius>
            <img src="../assets/me_on_kitchen.jpg" class="img-fluid" alt="">
            <a>
                <div class="mask"></div>
            </a>
        </div>
        <!--/.Card image-->

        <!--Card content-->
        <div class="card-body">
            <h5 class="pink-text">Crypto</h5>
            <!--Title-->
            <h4 class="card-title">Buy Crypto</h4>
            <!--Text-->
            <p class="card-text">
                If price lower than usual, today is a good day to buy crypto!!
            </p>
            <p>
                If price within 15% of all-time high, SELL SELL SELL
            </p>
            <a class="btn btn-unique waves-light" mdbRippleRadius>BUY</a>
        </div>
        <!--/.Card content-->

    </div>
    <!--/.Card-->

</div>




<!--/Body-->

  `
})
export class AppComponent {
  title = 'app';
}
