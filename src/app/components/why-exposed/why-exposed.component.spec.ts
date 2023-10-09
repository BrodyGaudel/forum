import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyExposedComponent } from './why-exposed.component';

describe('WhyExposedComponent', () => {
  let component: WhyExposedComponent;
  let fixture: ComponentFixture<WhyExposedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyExposedComponent]
    });
    fixture = TestBed.createComponent(WhyExposedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
