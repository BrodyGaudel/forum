import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleCompterComponent } from './circle-compter.component';

describe('CircleCompterComponent', () => {
  let component: CircleCompterComponent;
  let fixture: ComponentFixture<CircleCompterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircleCompterComponent]
    });
    fixture = TestBed.createComponent(CircleCompterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
