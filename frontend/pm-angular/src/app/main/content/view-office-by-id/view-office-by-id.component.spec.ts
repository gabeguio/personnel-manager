import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOfficeByIdComponent } from './view-office-by-id.component';

describe('ViewOfficeByIdComponent', () => {
  let component: ViewOfficeByIdComponent;
  let fixture: ComponentFixture<ViewOfficeByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewOfficeByIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOfficeByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
