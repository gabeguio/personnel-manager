import { Routes } from '@angular/router';
import { BlankComponent } from './blank/blank.component';
import { ViewEmployeesComponent } from './main/content/view-employees/view-employees.component';
import { ViewEmployeeByIdComponent } from './main/content/view-employee-by-id/view-employee-by-id.component';
import { AddNewEmployeeComponent } from './main/content/add-new-employee/add-new-employee.component';
import { ViewOfficesComponent } from './main/content/view-offices/view-offices.component';
import { ViewOfficeByIdComponent } from './main/content/view-office-by-id/view-office-by-id.component';
import { EditOfficeByIdComponent } from './main/content/edit-office-by-id/edit-office-by-id.component';

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
    },
    {
        path: 'office/:id',
        component: ViewOfficeByIdComponent
    },
    {
        path: 'edit/office/:id',
        component: EditOfficeByIdComponent
    }
];
