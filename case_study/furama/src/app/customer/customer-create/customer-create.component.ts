import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  createCustomer!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.createCustomer = new FormGroup(
      {
        customerType: new FormControl(''),
        customerName: new FormControl(''),
        customerBirthday: new FormControl(''),
        customerGender: new FormControl(''),
        customerIdCard: new FormControl(''),
        customerPhone: new FormControl(''),
        customerEmail: new FormControl(''),
        customerAddress: new FormControl(''),
      }
    )
  }

}
