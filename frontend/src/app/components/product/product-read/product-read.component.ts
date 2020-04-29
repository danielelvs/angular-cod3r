import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  displayedColumns: string[] = ['id', 'name', 'price', 'action'];

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productService
      .read()
      .subscribe(products => {
        this.products = products;
        console.log(products);
      });
  }

  delete(id: string) {
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage('Produto deletado com sucesso!');
      this.router.navigate(['/products']);
    })
  }

}
