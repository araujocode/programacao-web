import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';
import { ConversorTemperaturaComponent } from './conversor-temperatura/conversor-temperatura.component';
import { ImcComponent } from './imc/imc.component';

const routes: Routes = [
  {path:'calcular-media', component:CalcularMediaComponent},
  {path:'calculadora', component:CalculadoraComponent},
  {path:'apolice-seguro', component:ApoliceSeguroComponent},
  {path:'conversor-temperatura', component:ConversorTemperaturaComponent},
  {path:'imc', component:ImcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
