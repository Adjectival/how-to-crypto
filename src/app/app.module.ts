import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BuyComponent } from './buy/buy.component';
import { MineComponent } from './mine/mine.component';
import { TradeComponent } from './trade/trade.component';

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'buy', component: BuyComponent },
    { path: 'trade', component: TradeComponent },
    { path: 'mine', component: MineComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BuyComponent,
    MineComponent,
    TradeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule {}
