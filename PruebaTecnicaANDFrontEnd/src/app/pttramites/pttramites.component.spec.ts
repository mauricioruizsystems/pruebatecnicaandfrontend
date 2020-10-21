import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PttramitesComponent } from './pttramites.component';

describe('PttramitesComponent', () => {
  let component: PttramitesComponent;
  let fixture: ComponentFixture<PttramitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PttramitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PttramitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
