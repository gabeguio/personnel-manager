export class Office {

    officeId: number;
    maxCapacity: number;
    streetAddress: string;
    city: string;
    state: string;
    phone: string;
    employees: any[];

    constructor(officeId: number, maxCapacity: number, streetAddress: string, city: string, state: string, phone: string) {
        this.officeId = officeId;
        this.maxCapacity = maxCapacity;
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
        this.phone = phone;
        this.employees = [];
    }

}
