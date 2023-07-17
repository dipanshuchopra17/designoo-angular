import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographerSignupComponent } from './photographer-signup.component';

describe('PhotographerSignupComponent', () => {
  let component: PhotographerSignupComponent;
  let fixture: ComponentFixture<PhotographerSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotographerSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
