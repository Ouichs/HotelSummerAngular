import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHotelListComponent } from './page-hotel-list.component';

describe('PageHotelListComponent', () => {
  let component: PageHotelListComponent;
  let fixture: ComponentFixture<PageHotelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHotelListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHotelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
