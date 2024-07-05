import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Office } from '../../../models/office';
import { ActivatedRoute, Router } from '@angular/router';
import { OfficeService } from '../../../services/office.service';

@Component({
  selector: 'app-edit-office-by-id',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-office-by-id.component.html',
  styleUrl: './edit-office-by-id.component.css'
})
export class EditOfficeByIdComponent {
  office: Office = new Office(0,0,"","","","");

  officeId: number = 0;
  shortAddress: string = "";

  constructor(private route: ActivatedRoute, private officeService: OfficeService, private router: Router) {
    this.getOfficeById();
  }

  getOfficeById() {
    this.officeService.getOfficeById(this.route.snapshot.params['id'])
                    .subscribe(data => {

                      this.officeId = data.body.officeId;
                      this.shortAddress = data.body.city + ", " + data.body.state;

                      


                    });
  }

  updateOffice() {
    this.officeService.updateEmployee(this.office).subscribe(
        {
        next: data => { 
          console.log(data.headers.get('Message')); 
          this.getOfficeById();
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

  deleteOffice(officeId: number) {
    this.officeService.deleteOffice(officeId).subscribe(data => {
      this.router.navigate(['/offices']);
    });
  }

  deleteThisOffice() {
    this.deleteOffice(this.officeId);
  }
}

