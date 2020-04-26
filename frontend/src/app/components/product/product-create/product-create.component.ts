import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  product: Product = {
    name: '',
    price: null
  }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService
      .create(this.product)
      .subscribe(() => {
        this.productService.showMessage('Produto Criado.');
        this.router.navigate(['/products']);
      });
  }

  cancel() {
    this.router.navigate(['/products']);
  }

}
