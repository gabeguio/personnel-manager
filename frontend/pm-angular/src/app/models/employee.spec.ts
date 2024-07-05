import { Employee } from './employee';
import { Office } from './office';

describe('Employee', () => {
  it('should create an instance', () => {
    expect(new Employee(0,"","","","","","",new Office(0,0,"","","","",[]))).toBeTruthy();
  });
});
