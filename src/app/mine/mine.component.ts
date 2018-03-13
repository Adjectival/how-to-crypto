import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mine',
  styleUrls: ['./mine.component.scss'],
  template: `
  <div class="card-deck">
      <!--Card1-->
      <div class="col-md-4 my-3 text mx-auto">
          <!--Card-->
          <div class="card card-cascade narrower">
              <!--Card image-->
              <div class="view overlay hm-white-slight waves-light" mdbRippleRadius>
                  <img src="../assets/minergate0.png" class="img-fluid" alt="">
                  <a>
                      <div class="mask"></div>
                  </a>
              </div>
              <!--/.Card image-->
              <!--Card content-->
              <div class="card-body">
                  <h5 class="pink-text">Mine Crypto #1</h5>
                  <!--Title-->
                  <h4 class="card-title">
                      <a href="https://minergate.com/a/9a0de04eb12386db5a9e04fc" target="_blank">Join Minergate - Download GUI</a>
                  </h4>
                  <!--Text-->
                  <p class="card-text">
                      This mining pool (team) has easy-to-use GUI software which is ideal for people just learning how to mine.
                  </p>
                  <p class="card-text">
                      Compiling and tweaking specialized mining software DOES give better results, but we're just getting started here so let's keep it simple. Good is better than none!
                  </p>
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
                  <img src="../assets/minergate1.png" class="img-fluid" alt="">
                  <a>
                      <div class="mask"></div>
                  </a>
              </div>
              <!--/.Card image-->
              <!--Card content-->
              <div class="card-body">
                  <h5 class="pink-text">Mine Crypto #2</h5>
                  <!--Title-->
                  <h4 class="card-title">Install Minergate app</h4>
                  <!--Text-->
                    <p class="card-text">
                      It works on all major desktop operating systems.
                    </p>
                    <p class="card-text">
                      Here we're using macOS. If you wish, you can drag it to your Applications. But you can of course run it from the Downloads folder instead.
                    </p>
                    <p class="card-text">
                      Windows users, I hope you know what to do by now, and I hope you're going to poke a hole in your antivirus software to allow Minergate to run. I'll add more on this topic eventually. I dislike using Windows, so the incentive to make a fully inclusive, amazing guide versus a functional guide is kind of low at the moment. (Again, good beats none.)
                    </p>

              </div>
              <!--/.Card content-->
          </div>
      </div>
      <!--/.Card2-->


      <!--Card3-->
      <div class="col-md-4 my-3 text mx-auto">
          <!--Card-->
          <div class="card card-cascade narrower">
              <!--Card image-->
              <div class="view overlay hm-white-slight waves-light" mdbRippleRadius>
                  <img src="../assets/minergate2.png" class="img-fluid" alt="">
                  <a>
                      <div class="mask"></div>
                  </a>
              </div>
              <!--/.Card image-->
              <!--Card content-->
              <div class="card-body">
                  <h5 class="pink-text">Mine Crypto #3</h5>
                  <!--Title-->
                  <h4 class="card-title">
                      Dead simple Smart Mining
                  </h4>
                  <!--Text-->
                  <p class="card-text">
                      Just let the software decide which currency to mine, if you don't want to get too involved in this topic right now.
                  </p>
                  <p class="card-text">
                      Usually you'll mine Monero, which is a popular Top 10 currency with unique properties that make it a good long-term investment.
                  </p>
                  <p class="callout">
                      Since I mentioned it, I'll go ahead and tell you that Monero is truly and fully anonymous. Bitcoin is not. Which do you think will be more valuable in 5 years? And normal GPUs mine Monero just fine, but you need expensive custom machines now to make money on Bitcoin. XMR ftw!
                  </p>
              </div>
              <!--/.Card content-->
          </div>
      </div>
      <!--/.Card3-->

      <!--Card4-->
      <div class="col-md-4 my-3 text mx-auto">
          <!--Card-->
          <div class="card card-cascade narrower">
              <!--Card image-->
              <div class="view overlay hm-white-slight waves-light" mdbRippleRadius>
                  <img src="../assets/minergate3.png" class="img-fluid" alt="">
                  <a>
                      <div class="mask"></div>
                  </a>
              </div>
              <!--/.Card image-->
              <!--Card content-->
              <div class="card-body">
                  <h5 class="pink-text">Mine Crypto #4</h5>
                  <!--Title-->
                  <h4 class="card-title">Decide on mining power</h4>
                  <!--Text-->
                  <p class="card-text">
                      In this example I'm using a MacBook Air, which has no graphics card. So it's a very simple choice-- only CPU available.
                  </p>
                  <p class="card-text">
                      Go as high as you wish, especially if you're not going to use the machine while mining.
                  </p>
                  <p class="callout">
                      Here's where you can leave your gaming PC on all night at max GPUs! But keep it cool, add extra fans or at least open the case! Please take this seriously, I don't want you to overheat your machinery and break it.
                  </p>
              </div>
              <!--/.Card content-->
          </div>
      </div>
      <!--/.Card4-->

      <!--Card5-->
      <div class="col-md-4 my-3 text mx-auto">
          <!--Card-->
          <div class="card card-cascade narrower">
              <!--Card image-->
              <div class="view overlay hm-white-slight waves-light" mdbRippleRadius>
                  <img src="../assets/minergate4.png" class="img-fluid" alt="">
                  <a>
                      <div class="mask"></div>
                  </a>
              </div>
              <!--/.Card image-->
              <!--Card content-->
              <div class="card-body">
                  <h5 class="pink-text">Mine Crypto Confirmation</h5>
                  <!--Title-->
                  <h4 class="card-title">Dashboard for all your miners</h4>
                  <!--Text-->
                  <p class="card-text">
                      Nice! So now just look at <a href="minergate.com/internal" target="_blank">
                      minergate.com/internal</a> to see your progress.
                  </p>
                  <p class="card-text">
                      The more machines you have mining, the faster your results!
                  </p>
                  <p class="callout">
                      Bonus Tip: YOU can give your friends your own referral code, just like I linked mine on this guide! Choose the 'Affiliate program' link up top and share the love of decentralized money systems!
                  </p>
              </div>
              <!--/.Card content-->
          </div>
      </div>
      <!--/.Card5-->

  </div>

  `
})
export class MineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
