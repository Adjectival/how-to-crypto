import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  template: `
  <div class="centred m-5 card p-4">
      <h1>How To Crypto</h1>
      <h2 class="callout">
        'A simple guide to starting out in a complex new money system.'
      </h2>
      <h4>
          Would you like to learn the basics of buying, trading or even mining cryptocurrency?
          <br />
          Use the navigation bar!
      </h4>
      <p>
        Extensive questions?
        <br/>
        Requests for more details, or a personal consult on these topics?
        <br/>
        <a href="mailto:alexd.jacks@gmail.com">
            <i class="fas fa-paper-plane"></i>
            Email the author.
        </a>
        <br/>
        FYI, this guide is for educational purposes, and must not be confused with professional, authoritative investment advice. <i class="callout">The author accepts no responsibility whatsoever</i> for any profits, losses, excitement, adventure, or similar learning experiences or personal enrichments that may ensue based upon any <i class="callout">suggestions</i> in this guide.
        </p>

        <h6>
            Your choices are your own, I can only offer scraps of knowledge that will allow you to unlock opportunites. I hope you find these scraps useful.
        </h6>
  </div>
  `
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
