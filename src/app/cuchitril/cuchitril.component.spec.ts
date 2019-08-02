import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuchitrilComponent } from './cuchitril.component';

describe('CuchitrilComponent', () => {
  let component: CuchitrilComponent;
  let fixture: ComponentFixture<CuchitrilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuchitrilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuchitrilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
