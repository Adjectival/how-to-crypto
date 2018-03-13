import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <!--Body-->
    <app-home>
    </app-home>
    <router-outlet>
    </router-outlet>
    <!--/Body-->
  `
})
export class AppComponent {
  title = 'app';
}
