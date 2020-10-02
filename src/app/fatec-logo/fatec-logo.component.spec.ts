import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatecLogoComponent } from './fatec-logo.component';

describe('FatecLogoComponent', () => {
  let component: FatecLogoComponent;
  let fixture: ComponentFixture<FatecLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatecLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatecLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
