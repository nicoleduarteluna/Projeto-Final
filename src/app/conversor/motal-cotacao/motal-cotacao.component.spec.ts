import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotalCotacaoComponent } from './motal-cotacao.component';

describe('MotalCotacaoComponent', () => {
  let component: MotalCotacaoComponent;
  let fixture: ComponentFixture<MotalCotacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotalCotacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotalCotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
