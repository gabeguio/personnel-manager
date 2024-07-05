import { Routes } from '@angular/router';
import { BlankComponent } from './blank/blank.component';
import { ViewEmployeesComponent } from './main/content/view-employees/view-employees.component';
import { ViewEmployeeByIdComponent } from './main/content/view-employee-by-id/view-employee-by-id.component';

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
    }
];
