import { Component } from '@angular/core';
import { Office } from '../../../models/office';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { OfficeService } from '../../../services/office.service';

@Component({
  selector: 'app-view-office-by-id',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-office-by-id.component.html',
  styleUrl: './view-office-by-id.component.css'
})
export class ViewOfficeByIdComponent {
  office: Office = new Office(0,0,"","","","");

  currentOfficeId: number = 0;
  shortAddress: string = "";

  constructor(private route: ActivatedRoute, private officeService: OfficeService, private router: Router) {
    this.getOfficeById();
  }

  getOfficeById() {
    this.officeService.getOfficeById(this.route.snapshot.params['id'])
                    .subscribe(data => {

                      this.currentOfficeId = data.body.officeId;
                      this.shortAddress = data.body.city + ", " + data.body.state;

                      this.office.officeId = data.body.officeId;
                      this.office.maxCapacity = data.body.maxCapacity;
                      this.office.streetAddress = data.body.streetAddress;
                      this.office.city = data.body.city;
                      this.office.state = data.body.state;
                      this.office.phone = data.body.phone;
                      this.office.employees = [];
                      for (let item of data.body.employees) {
                        this.office.employees.push(item);
                      }
                    });
  }

  // updateOffice() {
  //   this.officeService.updateEmployee(this.office).subscribe(
  //       {
  //       next: data => { 
  //         console.log(data.headers.get('Message')); 
  //         this.getOfficeById();
  //       },
  //       error: err => {    
  //         console.log(err.message);
  //         console.log(err.headers);
  //       },     
  //       complete: () => {
  //         console.log('Complete')
  //         this.router.navigate(['/offices']); 
  //       } 
        
  //       } 
  //   );
  // }

  // deleteOffice(officeId: number) {
  //   this.officeService.deleteOffice(officeId).subscribe(data => {
  //     this.router.navigate(['/offices']);
  //   });
  // }

  // deleteThisOffice() {
  //   this.deleteOffice(this.officeId);
  // }
}
