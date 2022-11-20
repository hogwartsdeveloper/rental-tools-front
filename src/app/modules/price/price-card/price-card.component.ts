import { Component, OnInit } from '@angular/core';
import {PriceDetailComponent} from "../price-detail/price-detail.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.scss']
})
export class PriceCardComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDetail() {
    this.dialog.open(PriceDetailComponent, { panelClass: ['md:w-3/5', 'w-full'],
      maxHeight: '85vh', autoFocus: false});
  }

}
