import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIntroductionComponent } from './about-introduction.component';

describe('AboutIntroductionComponent', () => {
  let component: AboutIntroductionComponent;
  let fixture: ComponentFixture<AboutIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutIntroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
