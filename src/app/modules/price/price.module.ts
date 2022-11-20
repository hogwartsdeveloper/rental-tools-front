import { NgModule } from '@angular/core';
import { PriceComponent } from './price.component';
import { PriceDetailComponent } from './price-detail/price-detail.component';
import { PriceCardComponent } from './price-card/price-card.component';
import { PriceRoutingModule } from './price-routing.module';
import { PriceService } from './services/price.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from '../pipe/pipe/pipe.module';

@NgModule({
  declarations: [PriceComponent, PriceDetailComponent, PriceCardComponent],
  imports: [
    PriceRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    PipeModule,
  ],
  exports: [PriceComponent],
  providers: [PriceService],
})
export class PriceModule {}
