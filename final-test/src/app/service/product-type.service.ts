import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProductType} from "../model/IProductType";

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

  readonly API_URL : string = 'http://localhost:3000/productType';

  constructor(private httpClient: HttpClient) { }

  getAllProductType(): Observable<IProductType[]> {
    return this.httpClient.get<IProductType[]>(this.API_URL);
  }

  findById(id:number):Observable<IProductType[]> {
    return this.httpClient.get<IProductType[]>(this.API_URL + '/' + id);
  }
}
