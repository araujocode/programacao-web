import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  public numero1: number = 0;
  public numero2: number = 0;
  public operacao: string = '';
  public resultado: number = 0;

  public calcular(): void {
    switch (this.operacao.toLowerCase()) {
      case 'soma':
        this.resultado = this.numero1 + this.numero2;
        break;
      case 'subtracao':
        this.resultado = this.numero1 - this.numero2;
        break;
      case 'multiplicacao':
        this.resultado = this.numero1 * this.numero2;
        break;
      case 'divisao':
        if (this.numero2 !== 0) {
          this.resultado = this.numero1 / this.numero2;
        } else {
          alert('Não é possível dividir por zero');
          this.resultado = 0;
        }
        break;
      default:
        alert('Operação não disponível');
    }
  }
}
