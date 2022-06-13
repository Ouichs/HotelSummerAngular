import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindallutilisateurComponent } from './findallutilisateur.component';

describe('FindallutilisateurComponent', () => {
  let component: FindallutilisateurComponent;
  let fixture: ComponentFixture<FindallutilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindallutilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindallutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
