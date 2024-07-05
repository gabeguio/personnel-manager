import { Routes } from '@angular/router';
import { BlankComponent } from './blank/blank.component';
import { ViewEmployeesComponent } from './main/content/view-employees/view-employees.component';

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
        component: ViewEmployeesComponent
    }
];
