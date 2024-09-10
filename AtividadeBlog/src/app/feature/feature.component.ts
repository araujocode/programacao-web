import { Component } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css'
})
export class FeatureComponent {
  public numero1 : number = 0;
  public numero2 : number = 0;
  public resultado : number = 0;
  
  public add() : void {
    this.resultado = this.numero1 + this.numero2;
  }
}
