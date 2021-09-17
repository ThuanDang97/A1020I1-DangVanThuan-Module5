import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../model/IProduct";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  readonly API_URL: string = 'http://localhost:3000/product';

  constructor(public httpClient: HttpClient) {
  }

  getAllProduct(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.API_URL)
  }

  addProduct(product: IProduct): Observable<IProduct> {
    return this.httpClient.post<IProduct>(this.API_URL, product)
  }

  searchProduct(nameSearch: string, productTypeName: string): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.API_URL + '?nameProduct_like=' + nameSearch + '&typeProduct.productTypeName_like=' + productTypeName)
  }

  deleteProduct(id: number): Observable<IProduct> {
    return this.httpClient.delete<IProduct>(this.API_URL + '/' + id);
  }

  findById(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(this.API_URL + '/' + id);
  }

  update(id: string | null, product: IProduct):Observable<IProduct>{
    return this.httpClient.put<IProduct>(this.API_URL +"/"+id, product)
  }
}
