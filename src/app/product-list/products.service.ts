import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import type { Product } from 'src/core/entities';
import { MockProducts } from './MOCK_PRODUCTS';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getProducts(): Observable<Product[]> {
    const products = of(MockProducts);
    return products;
  }
}
