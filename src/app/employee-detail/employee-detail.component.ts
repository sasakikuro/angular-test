import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
// import { Client } from '../client';

import { TestService } from '../testService';
import { InputDataComponent } from '../input-data/input-data.component';
import { Client } from '../client';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  providers: [Client],
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
@Input() InputDataComponent;
@Input() client: Client;

  constructor(
    private testService: TestService,
    private location: Location) {}



  name: String;
  gender: String;
  work: String;
  cash: number;
  cashYear: number;
  ngOnInit() {
    // this.name = this.testService.name;
    // this.name = this.InputDataComponent.name;
    // this.name = this.inputDataComponent.name;
    // this.getDetail();
    // this.name = this.client.name;
    this.name = this.testService.getName();
    this.gender = this.testService.getGender();
    this.work = this.testService.getWork();
    this.cash = this.testService.getCash();
    this.cashYear = this.cash * this.testService.month;
  }

  goBack(): void {
    this.location.back();
  }
  // getDetail(): void{
  //   const name = +this.getDetail.name();
  // }
}
