import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Moeda } from '../models/moeda.model';
import { ConversaoResponse } from '../models/conversao-response.model';
import { Conversao } from '../models/conversao.model';
import { ViewChild } from '@angular/core';
import { MoedaService } from '../services/moeda.service';
import { ConversorService } from '../services/conversor.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {


  moedas: Moeda[]; // popular as combobox no html
  conversao: Conversao; // para armazenar as moedasDe e moedasPara
  possuiErro: boolean; // se tiver erro, pra exibir ou não a mensagem de erro
  conversaoResponse: ConversaoResponse; // conterá a resposta da consulta à API

  @ViewChild("conversaoForm", { static: true }) conversaoForm: NgForm;

  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService) {}

  ngOnInit() {
  	this.moedas = this.moedaService.listarTodas();
  	this.init();
  }

  /**
   * Efetua a chamada para a conversão dos valores.
   *
   * @return void
   */
  init(): void {
  	this.conversao = new Conversao('EUR', 'BRL', null);
  	this.possuiErro = false;
  }

  /**
   * Efetua a chamada para a conversão dos valores.
   *
   * @return void
   */
  converter(): void {
  	if (this.conversaoForm.form.valid) {
  	  this.conversorService
        .converter(this.conversao)
        .subscribe(
          response => this.conversaoResponse = response,
          error => this.possuiErro = true
        );
  	}
  }




}
