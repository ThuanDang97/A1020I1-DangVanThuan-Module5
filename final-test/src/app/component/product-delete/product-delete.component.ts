import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  id!: number;
  nameProduct!: string;

  constructor(public dialog: MatDialogRef<ProductDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public productService: ProductService) { }

  ngOnInit(): void {
    this.id = this.data.idProduct;
    this.nameProduct = this.data.nameProduct;
  }

  close() {
    this.dialog.close()
  }

  delete() {
    console.log(this.id);
    this.productService.deleteProduct(this.id).subscribe(() => {
      this.dialog.close()
    });
  }
}
