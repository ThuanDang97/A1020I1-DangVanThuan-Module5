import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerServiceService} from "../customer-service.service";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  createCustomer!: FormGroup;

  constructor(private formBuilder: FormBuilder, private customerServiceService: CustomerServiceService) {
  }

  ngOnInit(): void {
    this.createCustomer = this.formBuilder.group(
      {
        customerType: ['',[Validators.required, Validators.pattern("^KH-\\d{4}$")]],
        customerName: ["", Validators.required],
        customerBirthday: ["", Validators.required],
        customerGender: ["", Validators.required],
        customerIdCard: ["",[Validators.required, Validators.pattern("^(\\d{9}|\\d{12})")]],
        customerPhone: ["", Validators.required, Validators.pattern("^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)\\d{7}$")],
        customerEmail: ["", Validators.required],
        customerAddress: ["", Validators.required],
      }
    )
  }

}
