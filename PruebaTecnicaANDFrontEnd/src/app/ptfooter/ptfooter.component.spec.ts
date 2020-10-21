import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtfooterComponent } from './ptfooter.component';

describe('PtfooterComponent', () => {
  let component: PtfooterComponent;
  let fixture: ComponentFixture<PtfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
