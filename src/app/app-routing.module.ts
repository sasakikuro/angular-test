import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { InputDataComponent} from './input-data/input-data.component';


const routes: Routes = [
  { path: '', redirectTo: 'DataInput', pathMatch: 'full' },
  { path: 'employee-detail', component: EmployeeDetailComponent },
  { path: 'DataInput', component: InputDataComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
