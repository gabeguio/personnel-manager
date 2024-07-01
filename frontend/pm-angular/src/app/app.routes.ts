import { Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { BlankComponent } from './blank/blank.component';

// creating route for our router outlet
// each "page" needs a route
// each route includes a URL path and a component to load?

export const routes: Routes = [
    {
        path: '',
        component: BlankComponent
    },
    {
        path:'employees',
        component: EmployeesComponent
    }
];
