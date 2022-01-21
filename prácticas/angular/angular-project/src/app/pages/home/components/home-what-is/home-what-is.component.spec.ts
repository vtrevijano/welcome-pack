import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWhatIsComponent } from './home-what-is.component';

describe('HomeWhatIsComponent', () => {
  let component: HomeWhatIsComponent;
  let fixture: ComponentFixture<HomeWhatIsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWhatIsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWhatIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
