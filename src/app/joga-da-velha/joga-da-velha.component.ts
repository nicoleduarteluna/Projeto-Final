import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from './shared/jogo-da-velha.service';

@Component({
  selector: 'app-joga-da-velha',
  templateUrl: './joga-da-velha.component.html',
  styleUrls: ['./joga-da-velha.component.css']
})
export class JogaDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit(): void {
    this.jogoDaVelhaService.inicializar();
  }

  get showInicio(): boolean {
    return this.jogoDaVelhaService.showInicio;
  }

  get showTabuleiro(): boolean {
    return this.jogoDaVelhaService.showTabuleiro;
  }

  get showFinal(): boolean {
    return this.jogoDaVelhaService.showFinal;
  }

  iniciarJogo($event: any): void {
    $event.preventDefault();
    this.jogoDaVelhaService.iniciarJogo();
  }

  jogar(posX: number, posY: number): void {
    this.jogoDaVelhaService.jogar(posX, posY);
  }

  exibirX(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirX(posX, posY);
  }

  exibirO(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirO(posX, posY);
  }

  exibirVitoria(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirVitoria(posX, posY);
  }

  get jogador(): number {
    return this.jogoDaVelhaService.jogador;
  }

  novoJogo($event): void {
    $event.preventDefault();
    this.jogoDaVelhaService.novoJogo();
  }

}
