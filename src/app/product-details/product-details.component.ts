import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product.model';
import { ProductdetialsService } from '../service/productdetails.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  products : Array<Product>=[];

  constructor(private product: ProductdetialsService) {}


  ngOnInit(): void {
    this.product.getProducts().subscribe((data: any[]) => {
      this.products = (data as any).products;
    });
    }

}