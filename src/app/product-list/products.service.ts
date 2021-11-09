import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import type { Product } from 'src/core/entities';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private FAKE_API_URL = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.FAKE_API_URL}/products`);
  }
}
