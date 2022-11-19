import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ToolbarComponent} from "./modules/toolbar/toolbar.component";
import {PriceComponent} from "./modules/price/price.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarComponent,
    PriceComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
