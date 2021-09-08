import {Component, OnInit} from '@angular/core';
import {CustomerServiceService} from "../customer-service.service";
import {Customer} from "../Customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [];
  message: any;

  constructor(private customerService : CustomerServiceService) { }

  ngOnInit(): void {

    this.customerService.getAllCustomer().subscribe(
      (data) => {
        this.customers = data;
      },
      () => {
        console.log("Error!!!");
      },
      () => {
        console.log("completed!!!");
      }
    );
  }


}
