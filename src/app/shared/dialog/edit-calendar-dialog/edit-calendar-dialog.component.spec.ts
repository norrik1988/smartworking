import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCalendarDialogComponent } from './edit-calendar-dialog.component';

describe('EditCalendarDialogComponent', () => {
  let component: EditCalendarDialogComponent;
  let fixture: ComponentFixture<EditCalendarDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCalendarDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCalendarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
