import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `


<!--Body-->

<div class="col-md-4 mt-5 text">

    <!--Card-->
    <div class="card card-cascade narrower">

        <!--Card image-->
        <div class="view overlay hm-white-slight waves-light" mdbRippleRadius>
            <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" class="img-fluid" alt="">
            <a>
                <div class="mask"></div>
            </a>
        </div>
        <!--/.Card image-->

        <!--Card content-->
        <div class="card-body">
            <h5 class="pink-text"><i class="fa fa-cutlery"></i> Culinary</h5>
            <!--Title-->
            <h4 class="card-title">Cheat day inspirations</h4>
            <!--Text-->
            <p class="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi.</p>
            <a class="btn btn-unique waves-light" mdbRippleRadius>Button</a>
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
