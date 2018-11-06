import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Client } from './client';



@Injectable({
  providedIn: 'root'
})
export class TestService {

  selectClientDetail: Client;

  Clients: Client[];

  private heroesUrl = '';  // URL to web api
  firstName: String;
  lastName: String;
  name: String;
  gender: String;
  work: String;
  cash: number;
  month: number;
  private router: Router;
  constructor() {}



  getId(name: String)  {
    // return this.http.get<Client[]>(this.heroesUrl);
  }

  // getHero(id: number) {
  //   const url = `${this.heroesUrl}/${id}`;
  //   return this.http.get<Client>(url);
  // }

  setName(firstName: String, lastName: String) {
    if (firstName === 'undefined') {
      firstName = '';
    }
    if (lastName === 'underfined') {
      lastName = '';
    }
      return this.name = firstName + ' ' + lastName;
  }

  getName() {
    return this.name;
  }

  setDetail() {
    return;
  }

  setGender(gender: String) {
    if (gender = 'Male') {
      gender = '男';
    } else {
      gender = '女';
    }
    return this.gender = gender;
  }

  getGender() {
    return this.gender;
  }

  setWork(work: String) {
    switch (work) {
      case 'engineer' :
      work = '工程師';
      break;
      case 'lawyer' :
      work = '律師';
      break;
      case 'Doctor' :
      work = '醫師';
      break;
    }
    return this.work = work;
  }

  getWork() {
    return this.work;
  }
  // setRouter(routerName: String){
  //   return this.router.navigate([routerName]);
  // }
  setCash(cash: number, month: number) {
    return this.cash = cash, this.month = month;
  }
  getCash() {
    return this.cash;
  }


}

