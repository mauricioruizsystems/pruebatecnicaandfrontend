import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtsectionsComponent } from './ptsections.component';

describe('PtsectionsComponent', () => {
  let component: PtsectionsComponent;
  let fixture: ComponentFixture<PtsectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtsectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtsectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
