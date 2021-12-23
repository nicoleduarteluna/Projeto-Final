import { ConversorModule } from './conversor/conversor.module';
import { CalculadoraModule } from './calculadora/calculadora.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { TarefasModule } from './tarefas/tarefas.module';
import { JogaDaVelhaModule } from './joga-da-velha/joga-da-velha.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    CalculadoraModule,
    ConversorModule,
    TarefasModule,
    JogaDaVelhaModule,
    AppRoutingModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
