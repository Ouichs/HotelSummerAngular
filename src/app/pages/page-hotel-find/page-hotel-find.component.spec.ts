import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHotelFindComponent } from './page-hotel-find.component';

describe('PageHotelFindComponent', () => {
  let component: PageHotelFindComponent;
  let fixture: ComponentFixture<PageHotelFindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHotelFindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHotelFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
