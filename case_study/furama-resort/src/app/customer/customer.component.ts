import { Component, OnInit } from '@angular/core';
import {ICustomer} from "../ICustomer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  customer1 : ICustomer = {
    customerId : 1,
    customerType : "",
    customerName : "Đặng Văn Thuận",
    customerBirthday : "25-10-1997",
    customerGender : "Male",
    customerIdCard : 123123123,
    customerPhone : 123123123,
    customerEmail : "abc@gmail.com",
    customerAddress : "Đà Nẵng"
  };

  ngOnInit(): void {
  }

}
