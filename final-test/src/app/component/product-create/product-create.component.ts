import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ProductTypeService} from "../../service/product-type.service";
import {Router} from "@angular/router";
import {IProductType} from "../../model/IProductType";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService, private productTypeService: ProductTypeService, private router: Router) {
  }

  listProductType!: IProductType[];
  createForm = new FormGroup({
    id: new FormControl(''),
    nameProduct: new FormControl('', [Validators.required]),
    typeProduct: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.pattern("^-?[0-9]+$")]),
    //^(?:1[01][0-9]|120|1[8-9]|[2-9][0-9])$
  });

  get getName() {
    return this.createForm.get("nameProduct")
  }

  get getTypeProduct() {
    return this.createForm.get("typeProduct")
  }

  get getPrice() {
    return this.createForm.get("price")
  }

  ngOnInit(): void {
    this.productTypeService.getAllProductType().subscribe(data => {
      // @ts-ignore
      this.listProductType = data;
    })
  }

  create() {
    this.productService.addProduct(this.createForm.value).subscribe();
    this.router.navigateByUrl('');

  }
}
