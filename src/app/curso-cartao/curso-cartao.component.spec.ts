import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoCartaoComponent } from './curso-cartao.component';

describe('CursoCartaoComponent', () => {
  let component: CursoCartaoComponent;
  let fixture: ComponentFixture<CursoCartaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoCartaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
