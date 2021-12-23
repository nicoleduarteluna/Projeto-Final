import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JogoDaVelhaService } from './shared/jogo-da-velha.service';
import { JogaDaVelhaComponent } from './joga-da-velha.component';

describe('JogaDaVelhaComponent', () => {
  let component: JogaDaVelhaComponent;
  let fixture: ComponentFixture<JogaDaVelhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogaDaVelhaComponent ],
      providers: [ JogoDaVelhaService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogaDaVelhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
