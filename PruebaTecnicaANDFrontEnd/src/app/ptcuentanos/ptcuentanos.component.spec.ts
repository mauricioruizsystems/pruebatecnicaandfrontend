import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtcuentanosComponent } from './ptcuentanos.component';

describe('PtcuentanosComponent', () => {
  let component: PtcuentanosComponent;
  let fixture: ComponentFixture<PtcuentanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtcuentanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtcuentanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
