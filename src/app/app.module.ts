import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ToolbarComponent} from "./modules/toolbar/toolbar.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
