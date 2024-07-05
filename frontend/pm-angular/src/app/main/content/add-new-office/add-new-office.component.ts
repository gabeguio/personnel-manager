import { Component } from '@angular/core';
import { Office } from '../../../models/office';
import { OfficeService } from '../../../services/office.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-new-office',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './add-new-office.component.html',
  styleUrl: './add-new-office.component.css'
})
export class AddNewOfficeComponent {
  office: Office = new Office(0,0,"","","","");

  constructor(private officeService: OfficeService, private router: Router) {
  }

  createOffice() {
    this.officeService.createOffice(this.office).subscribe(
        {
        next: data => { 
          console.log(data.headers.get('Message')); 
          this.office = new Office(0,0,"","","","");
        },
        error: err => {    
          console.log(err.message);
          console.log(err.headers);
        },     
        complete: () => {
        console.log('Complete')
        this.router.navigate(['/offices']);
        }
        } 
    );
  }

}