import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrls: ['./calcular-media.component.css']
})
export class CalcularMediaComponent {
  public ac1: number = 0;
  public ac2: number = 0;
  public ag: number = 0;
  public af: number = 0;
  public mediaFinal: number = 0;
  public resultado: string = '';

  public calcular(): void {
    this.mediaFinal = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);

    if (this.mediaFinal >= 5) {
      this.resultado = 'Aprovado';
    } else {
      this.resultado = 'Reprovado';
    }
  }
}
