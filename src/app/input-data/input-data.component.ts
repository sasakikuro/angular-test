import { Component, OnInit, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';


import { Client } from '../client';
import { TestService } from '../testService';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';


@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  providers: [Client],
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent {
  // @Input() client: Client;
  @Output() EmployeeDetailComponent;

  firstName: String;
  lastName: String;
  work: String;
  name = 'Dear Client';
  gender = 'Male';
  cash: number;
  month: number;
  // Checkbox

  //

constructor(private client: Client,
  private router: Router,
  private testService: TestService
  ) {}

  submitForm(form: any): void {
    console.log('Form Data: ');
    console.log(form);
    console.log(this.work);
    // console.log(f.value);
    // alert('Hello ' + this.firstName + ' ' + this.lastName + ' Your work is ' + this.work1);
    this.name = this.firstName + ' ' + this.lastName;
    this.testService.setName(this.firstName, this.lastName);
    this.setDetail();
    this.router.navigate(['employee-detail']);
    // name = this.firstName  this.lastName;
  }

  setDetail(): void {
    this.testService.setGender(this.gender);
    this.testService.setWork(this.work);
    this.testService.setCash(this.cash, this.month);
  }

}
