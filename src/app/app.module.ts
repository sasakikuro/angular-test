import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

import { AppRoutingModule } from './/app-routing.module';
import { InputDataComponent } from './input-data/input-data.component';
// import {TestService} from './testService';
// import { TestRoutingModule } from './test-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    // TestRoutingModule

  ],
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeDetailComponent,
    InputDataComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
