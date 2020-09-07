import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatecIpiCursosCliComponent } from './fatec-ipi-cursos-cli.component';

describe('FatecIpiCursosCliComponent', () => {
  let component: FatecIpiCursosCliComponent;
  let fixture: ComponentFixture<FatecIpiCursosCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatecIpiCursosCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatecIpiCursosCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
