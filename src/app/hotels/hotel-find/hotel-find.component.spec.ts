import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelFindComponent } from './hotel-find.component';

describe('HotelFindComponent', () => {
  let component: HotelFindComponent;
  let fixture: ComponentFixture<HotelFindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelFindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
