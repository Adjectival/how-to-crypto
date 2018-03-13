import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  template: `
  <div class="centred m-5 card p-4">
      <h1>How To Crypto</h1>
      <h2>'A simple guide to start out in a complex new money system.'</h2>
      <h3>Questions? Use the navigation bar up top.</h3>
      <p>
      Extensive questions?<br/>
        <i class="fas fa-paper-plane"></i>
        <a href="mailto:alexd.jacks@gmail.com">Email the author.</a>
      </p>
  </div>
  `
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
