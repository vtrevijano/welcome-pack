import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRequierementsComponent } from './home-requierements.component';

describe('HomeRequierementsComponent', () => {
  let component: HomeRequierementsComponent;
  let fixture: ComponentFixture<HomeRequierementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRequierementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRequierementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
