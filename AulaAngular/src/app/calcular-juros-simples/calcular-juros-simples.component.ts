import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-juros-simples',
  templateUrl: './calcular-juros-simples.component.html',
  styleUrl: './calcular-juros-simples.component.css'
})
export class CalcularJurosSimplesComponent {
  public capitalInicial : number = 0; 
  public taxaJuros : number = 0; 
  public periodoTempo : number = 0; 
  public juros : number = 0; 
  public montante : number = 0; 

  public calcular() : void {
    this.juros = this.capitalInicial * this.taxaJuros * this.periodoTempo;
    this.montante = this.capitalInicial + this.juros;
  }
}
