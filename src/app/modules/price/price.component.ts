import { Component, OnInit } from '@angular/core';
import { PriceService } from './services/price.service';
import { take } from 'rxjs';
import { IPrice } from './models/price.model';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent implements OnInit {
  tools: IPrice[] | undefined;
  constructor(private priceService: PriceService) {}

  ngOnInit(): void {
    this.priceService
      .getPriceTools()
      .pipe(take(1))
      .subscribe((prices) => (this.tools = prices));
  }
}
