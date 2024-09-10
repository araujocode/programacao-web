import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor-temperatura',
  templateUrl: './conversor-temperatura.component.html',
  styleUrls: ['./conversor-temperatura.component.css']
})
export class ConversorTemperaturaComponent {
  public celsius: number = 0;
  public fahrenheit: number = 0;
  public kelvin: number = 0;

  public converter(): void {
    this.fahrenheit = (this.celsius * 9/5) + 32;
    this.kelvin = this.celsius + 273.15;
  }
}
