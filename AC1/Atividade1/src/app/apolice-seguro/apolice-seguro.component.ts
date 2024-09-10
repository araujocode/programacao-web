import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice-seguro',
  templateUrl: './apolice-seguro.component.html',
  styleUrls: ['./apolice-seguro.component.css']
})
export class ApoliceSeguroComponent {
  public nomeSegurado: string = '';
  public sexo: string = '';
  public idade: number = 0;
  public precoAutomovel: number = 0;
  public precoApolice: number = 0;

  public calcular(): void {
    if (this.sexo === 'masculino' && this.idade <= 25) {
      this.precoApolice = this.precoAutomovel * 0.15;
    } else if (this.sexo === 'masculino' && this.idade > 25) {
      this.precoApolice = this.precoAutomovel * 0.10;
    } else if (this.sexo === 'feminino') {
      this.precoApolice = this.precoAutomovel * 0.08;
    } else {
      alert('Sexo inválido');
      this.precoApolice = 0;
    }
  }
}
