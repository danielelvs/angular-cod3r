import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;
  id: string;

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.readById(this.id).subscribe(product => this.product = product);
  }

  deleteProduct() {
    this.productService.delete(this.id).subscribe(() => {
      this.productService.showMessage('Produto deletado com sucesso!');
      this.cancel();
    })
  }

  cancel() {
    this.router.navigate(['/products']);
  }

}
