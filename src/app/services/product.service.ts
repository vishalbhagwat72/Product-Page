import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appConst } from '../app.const';
import { environment } from '../environments/environment';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = `${environment.apiEndpoint}${appConst.apiRoute.products}`;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
