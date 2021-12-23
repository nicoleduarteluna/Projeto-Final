import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalCotacaoComponent } from './../modal-cotacao/modal-cotacao.component';
import { DataBrPipe } from './../pipes/data-br.pipe';
import { NumeroDirective } from './../directives/numero.directive';
import { ConversorService } from './../services/conversor.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConversorComponent } from './conversor.component';

import { MoedaService } from './../services/moeda.service';


describe('ConversorComponent', () => {
  let component: ConversorComponent;
  let fixture: ComponentFixture<ConversorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversorComponent, ModalCotacaoComponent,  DataBrPipe, NumeroDirective  ],
      providers: [ MoedaService, ConversorService],
      imports: [FormsModule, HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
