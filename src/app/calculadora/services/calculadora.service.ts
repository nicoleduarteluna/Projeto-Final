/**
 * Serviço responsável por executar as operações da calculadora.
 * @author Nicole Duarte Luna <nicole.luna@totvs.com.br>
 * @since 1.0.0
 */


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculadoraService {
  /*
    Define as constantes utilizadas para identificar as operações
  */

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly MULTIPLICACAO: string = '*';
  static readonly DIVISAO: string = '/';

  constructor() {}

  /**
    Suporta as operações soma, subtração, divisão e multiplicação.
    @param num1 number
    @param num2 number
    @param operacao string
    @return number resultado da operação

  */
  calcular(num1: number, num2: number, operacao: string): number {
    // let: variável local
    let resultado: number; // armazena o resultao

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      default:
        resultado = 0;
    }

    return resultado;
  }
}

