import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent {
  public peso: number = 0;
  public altura: number = 0;
  public imc: number = 0;
  public resultado: string = '';

  public calcularIMC(): void {
    if (this.altura > 0) {
      this.imc = this.peso / (this.altura * this.altura);
      this.resultado = this.faixa(this.imc);
    } else {
      this.resultado = 'Altura inválida';
    }
  }

  private faixa(imc: number): string {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc >= 18.5 && imc <= 24.9) return 'Peso normal';
    if (imc >= 25 && imc <= 29.9) return 'Sobrepeso';
    if (imc >= 30 && imc <= 34.9) return 'Obesidade grau I';
    if (imc >= 35 && imc <= 39.9) return 'Obesidade grau II';
    return 'Obesidade grau III';
  }
}
