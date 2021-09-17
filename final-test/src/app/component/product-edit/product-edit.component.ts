import {Component, OnInit} from '@angular/core';
import {IProductType} from "../../model/IProductType";
import {IProduct} from "../../model/IProduct";
import {ProductService} from "../../service/product.service";
import {ProductTypeService} from "../../service/product-type.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product!: IProduct[];
  listProductType!: IProductType[];
  id!: string | null;
  msg: string = '';

  constructor(private productService: ProductService, private productTypeService: ProductTypeService, private router: Router, private activateRouter: ActivatedRoute) {
  }

  updateForm = new FormGroup({
    id: new FormControl(''),
    nameProduct: new FormControl('', [Validators.required]),
    typeProduct: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.pattern("^-?[0-9]+$")]),
    //^(?:1[01][0-9]|120|1[8-9]|[2-9][0-9])$
  });

  get getName() {
    return this.updateForm.get("nameProduct")
  }

  get getTypeProduct() {
    return this.updateForm.get("typeProduct")
  }

  get getPrice() {
    return this.updateForm.get("price")
  }

  ngOnInit(): void {

    this.productTypeService.getAllProductType().subscribe((data) => {
      this.listProductType = data;
    });

    this.activateRouter.paramMap.subscribe((param) => {
      this.id = param.get("id");
      this.productService.findById(Number(this.id)).subscribe((data: IProduct) => {
        this.updateForm.patchValue(data);
      })
    })
  }

  update() {
    this.productService.update(this.id, this.updateForm.value).subscribe(data => {
      // @ts-ignore
      return this.router.navigateByUrl('');
    })
  }
}
