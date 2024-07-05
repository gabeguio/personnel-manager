import { Office } from "./office";

export class Employee {

    employeeId: number;
    firstName: string;
    lastName: string;
    jobTitle: string;
    employmentStatus: string;
    email: string;
    departmentName: string;
    officeId: number;

    constructor(employeeId: number, firstName: string, lastName: string, jobTitle: string, employmentStatus: string, email: string, departmentName: string, officeId: number) {
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.employmentStatus = employmentStatus;
        this.email = email;
        this.departmentName = departmentName;
        this.officeId = officeId;
    }
}
