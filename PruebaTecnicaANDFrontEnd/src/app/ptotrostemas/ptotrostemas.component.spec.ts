import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtotrostemasComponent } from './ptotrostemas.component';

describe('PtotrostemasComponent', () => {
  let component: PtotrostemasComponent;
  let fixture: ComponentFixture<PtotrostemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtotrostemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtotrostemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
