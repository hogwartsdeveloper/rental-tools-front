import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PriceDetailComponent} from "./price-detail/price-detail.component";

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }



}
