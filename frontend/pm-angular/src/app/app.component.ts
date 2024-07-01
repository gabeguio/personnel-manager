import { Component } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
// Import all the components that are used in the AppComponent


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidenavComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basics';
}
