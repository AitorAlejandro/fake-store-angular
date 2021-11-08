import { Component, OnInit } from '@angular/core';
import { Product } from '../../core/entities';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  title = 'Product List';

  product: Product = {
    category: 'category',
    description: 'description',
    id: 1,
    image: '',
    price: 0,
    rating: {
      count: 1,
      rate: 1,
    },
    title: 'title',
  };

  constructor() {}

  ngOnInit(): void {}
}
