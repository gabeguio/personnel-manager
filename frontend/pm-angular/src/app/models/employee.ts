import { Office } from "./office";

export class Employee {

    employeeId: number;
    firstName: string;
    lastName: string;
    jobTitle: string;
    employmentStatus: string;
    email: string;
    departmentName: string;
    office: any;

    constructor(employeeId: number, firstName: string, lastName: string, jobTitle: string, employmentStatus: string, email: string, departmentName: string) {
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.employmentStatus = employmentStatus;
        this.email = email;
        this.departmentName = departmentName;
        this.office = new Office(0,0,"","","","");
    }
}
