import { NgModule } from '@angular/core';
import { PriceComponent } from './price.component';
import { PriceDetailComponent } from './price-detail/price-detail.component';
import { PriceCardComponent } from './price-card/price-card.component';
import { PriceRoutingModule } from './price-routing.module';
import { PriceService } from './services/price.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PriceComponent, PriceDetailComponent, PriceCardComponent],
  imports: [PriceRoutingModule, HttpClientModule, CommonModule],
  exports: [PriceComponent],
  providers: [PriceService],
})
export class PriceModule {}
