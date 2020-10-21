import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtopinionComponent } from './ptopinion.component';

describe('PtopinionComponent', () => {
  let component: PtopinionComponent;
  let fixture: ComponentFixture<PtopinionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtopinionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtopinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
