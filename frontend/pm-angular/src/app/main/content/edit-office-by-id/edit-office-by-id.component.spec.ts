import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOfficeByIdComponent } from './edit-office-by-id.component';

describe('EditOfficeByIdComponent', () => {
  let component: EditOfficeByIdComponent;
  let fixture: ComponentFixture<EditOfficeByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditOfficeByIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOfficeByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
