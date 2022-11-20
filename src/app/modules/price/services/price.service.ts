import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPrice } from '../models/price.model';

@Injectable()
export class PriceService {
  constructor(private http: HttpClient) {}

  getPriceTools(): Observable<IPrice[]> {
    return this.http.get<IPrice[]>('/assets/data/tools-price.json');
  }
}
