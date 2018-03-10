import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `

  <ul class="nav nav-pills nav-justified">
    <li class="nav-item">
      <a class="nav-link" href="#!">
            Buy
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" href="#!">Trade</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#!">Mine</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="mailto:alexd.jacks@gmail.com">Email Me!</a>
    </li>
  </ul>



<!--Body-->



<!--Carousel Wrapper-->
<mdb-carousel [isControls]="true" class="carousel slide carousel-fade" [animation]="'fade'">
    <!--First slide-->
    <mdb-slide>
        <div class="view hm-black-strong">
            <img class="d-block w-75 mx-auto" src="../assets/trade0.png" alt="First slide">
            <div class="mask waves-light" mdbRippleRadius></div>
        </div>
        <div class="carousel-caption">
            <h3 class="h3-responsive">Trade crypto</h3>
            <p>Choose Exchange Advanced for best options</p>
        </div>
    </mdb-slide>
    <!--/First slide-->
    <!--Second slide-->
    <mdb-slide>
        <div class="view hm-black-strong">
            <img class="d-block w-50 mx-auto" src="../assets/trade2.png" alt="Second slide">
            <div class="mask waves-light" mdbRippleRadius></div>
        </div>
        <div class="carousel-caption">
            <h3 class="h3-responsive">Exchange Board</h3>
            <p>Just focus on these areas for now.</p>
            <p>On top you choose the exchange you want. Maybe it's buying NEO using ETHereum.</p>
        </div>
    </mdb-slide>
    <!--/Second slide-->
    <!--Third slide-->
    <mdb-slide>
        <div class="view hm-black-strong">
            <img class="d-block w-50 mx-auto" src="../assets/trade1.png" alt="Third slide">
            <div class="mask waves-light" mdbRippleRadius></div>
        </div>
        <div class="carousel-caption">
            <h3 class="h3-responsive">Bottom right corner</h3>
            <p>Where you exchange</p>
        </div>
    </mdb-slide>
    <!--/Third slide-->
    <!--Fourth slide-->
    <mdb-slide>
        <div class="view hm-black-slight">
            <img class="d-block w-75 mx-auto" src="../assets/trade3.png" alt="Fourth slide">
            <div class="mask waves-light" mdbRippleRadius></div>
        </div>
        <div class="carousel-caption">
            <h3 class="h3-responsive">Choose 'Market'</h3>
            <p>You can use the 25%, 50%, 100% buttons to see how much you'll buy.</p>
        </div>
    </mdb-slide>
    <!--/Third slide-->
</mdb-carousel>
<!--/.Carousel Wrapper-->



<!--Card1-->
<div class="col-md-4 my-3 text mx-auto">

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

</div>
<!--/.Card1-->


<!--Card2-->
<div class="col-md-4 my-3 text mx-auto">
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
            <h4 class="card-title">Trade Crypto</h4>
            <!--Text-->
            <p class="card-text">
                Use Binance to exchange crypto
            </p>
            <p>
                Will you speculate quickly, or HODL?
            </p>
            <a class="btn btn-unique waves-light" mdbRippleRadius>TRADE</a>
        </div>
        <!--/.Card content-->
    </div>
</div>
<!--/.Card2-->



<!--/Body-->

  `
})
export class AppComponent {
  title = 'app';
}
