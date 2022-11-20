import { Component, OnDestroy, OnInit } from '@angular/core';
import { PriceService } from './services/price.service';
import { Observable, Subject, take, takeUntil } from 'rxjs';
import { IPrice } from './models/price.model';
import { FormControl } from '@angular/forms';
import * as stream from 'stream';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent implements OnInit, OnDestroy {
  tools: IPrice[] = [];
  name = new FormControl('');
  nameSearch: string = '';
  destroy$ = new Subject();

  constructor(private priceService: PriceService) {
    this.name.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((search) => (this.nameSearch = search!));
  }

  ngOnInit(): void {
    this.priceService
      .getPriceTools()
      .pipe(take(1))
      .subscribe((prices) => (this.tools = prices));
  }

  ngOnDestroy() {
    this.destroy$.next(undefined);
    this.destroy$.complete();
  }
}
