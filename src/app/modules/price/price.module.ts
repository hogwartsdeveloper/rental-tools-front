import { NgModule } from '@angular/core';
import { PriceComponent } from './price.component';
import { PriceDetailComponent } from './price-detail/price-detail.component';
import { PriceCardComponent } from './price-card/price-card.component';
import { PriceRoutingModule } from './price-routing.module';

@NgModule({
  declarations: [PriceComponent, PriceDetailComponent, PriceCardComponent],
  imports: [PriceRoutingModule],
  exports: [PriceComponent],
  providers: [],
})
export class PriceModule {}
