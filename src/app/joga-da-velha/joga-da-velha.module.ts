import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogaDaVelhaComponent } from './joga-da-velha.component';
import { JogoDaVelhaService } from './shared/jogo-da-velha.service';


@NgModule({
  declarations: [
    JogaDaVelhaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JogaDaVelhaComponent
  ],
  providers: [
    JogoDaVelhaService
  ]
})
export class JogaDaVelhaModule { }
