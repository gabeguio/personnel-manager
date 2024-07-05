import { Component } from '@angular/core';
import { Office } from '../../../models/office';
import { OfficeService } from '../../../services/office.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-offices',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-offices.component.html',
  styleUrl: './view-offices.component.css'
})
export class ViewOfficesComponent {

  offices: Office[] = [];
  currentPage: number = 0;
  totalPages: number = 1;
  totalOffices: number = 0;
  constructor(private officeService: OfficeService) {
    this.getOfficesByPage(this.currentPage);
  }

  getOfficesByPage(page: number): void {
    this.officeService.getOfficesByPage(page)
        .subscribe(response => {
            this.offices = [];
            this.currentPage = response.body.pageNumber;
            this.totalPages = response.body.totalPages;
            this.currentPage = response.body.pageNumber;
            this.totalOffices = response.body.totalElements;

            for (let item of response.body.content) {
              const currentOffice = new Office(item.officeId,
                item.maxCapacity,
                item.streetAddress,
                item.city,
                item.state,
                item.phone,
              )
              const currentemployees =  item.employees.length > 0 ? item.employees : [];
              currentOffice.employees = currentemployees;
              this.offices.push(currentOffice);
              } 
            }
          );
  }

  goToPreviousPage(): void {
    if (this.currentPage > 0) {
      this.getOfficesByPage(this.currentPage - 1);
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.getOfficesByPage(this.currentPage + 1);
    }
  }
}