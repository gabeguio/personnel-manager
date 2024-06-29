import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DepartmentsComponent } from './departments/departments.component';

// creating route for our router outlet
// each "page" needs a route
// each route includes a URL path and a component to load?

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path:'departments',
        component: DepartmentsComponent
    }
];
