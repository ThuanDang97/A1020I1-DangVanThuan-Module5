import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {IProduct} from "../../model/IProduct";
import {IProductType} from "../../model/IProductType";
import {ProductTypeService} from "../../service/product-type.service";
import {MatDialog} from "@angular/material/dialog";
import {ProductDeleteComponent} from "../product-delete/product-delete.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public product!: IProduct[];
  page: number = 1;
  public searchValue: string = '';
  public searchClass: string = '';
  public productType!: IProductType[];
  msg: string = '';

  constructor(private productService: ProductService, private productTypeService: ProductTypeService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(
      data => {
        this.product = data;
      }
    );
    this.productTypeService.getAllProductType().subscribe(
      data => {
        this.productType = data
      }
    )
  }

  doSearch() {
    this.productService.searchProduct(this.searchValue, this.searchClass).subscribe(
      (data) => {
        this.product = data
      });
  }

  delete(id: number, nameProduct: string) {
    const dialog = this.dialog.open(ProductDeleteComponent, {
      width: '550px',
      height: '350px',
      data: {
        idProduct: id,
        nameProduct: nameProduct
      }
    });
    dialog.afterClosed().subscribe(() =>{
      this.ngOnInit();
      this.msg = 'Delete product ' + nameProduct + " done!!!";
    });
  }
}
