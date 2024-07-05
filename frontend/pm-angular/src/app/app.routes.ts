import { Routes } from '@angular/router';
import { BlankComponent } from './blank/blank.component';
import { ViewEmployeesComponent } from './main/content/view-employees/view-employees.component';
import { ViewEmployeeByIdComponent } from './main/content/view-employee-by-id/view-employee-by-id.component';
import { AddNewEmployeeComponent } from './main/content/add-new-employee/add-new-employee.component';
import { ViewOfficesComponent } from './main/content/view-offices/view-offices.component';

export const routes: Routes = [
    {
        path: '',
        component: BlankComponent
    },
    {
        path:'employees',
        component: ViewEmployeesComponent
    },
    {
        path: 'employee/:id',
        component: ViewEmployeeByIdComponent
    },
    {
        path: 'add/employee',
        component: AddNewEmployeeComponent
    },
    {
        path: 'offices',
        component: ViewOfficesComponent
    }
];
