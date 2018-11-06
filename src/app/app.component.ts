import { Component, OnInit, Input} from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';



import { Client } from './client';
import { TestService } from './testService';
// import { get } from 'http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// @NgModel({

// })

export class AppComponent {
  @Input() client: Client;

  firstName: String;
  lastName: String;
  name = 'Dear Client';

  private router: Router;

  submitForm(form: any): void {
    console.log('Form Data: ');
    console.log(form);
    // alert('Hello ' + this.firstName + ' ' + this.lastName);
    this.name = this.firstName + ' ' + this.lastName;
    this.router.navigate(['employee-detail']);
    // name = this.firstName  this.lastName;
  }

// getName(): void {
//   const name = + get('firstName');
//   name = + get('lastName');
//   this.heroService.getHero(id)
//     .subscribe(hero => this.hero = hero);
// }

}
