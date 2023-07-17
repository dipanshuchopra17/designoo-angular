import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographerLoginComponent } from './photographer-login.component';

describe('PhotographerLoginComponent', () => {
  let component: PhotographerLoginComponent;
  let fixture: ComponentFixture<PhotographerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotographerLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
