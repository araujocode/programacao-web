import { Component } from '@angular/core';
import { Cliente } from '../../models/Cliente';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrl: './lista-cliente.component.css',
})
export class ListaClienteComponent {
  cliente: Cliente[] = [
    { id: 1, nome: 'Fulano', celular: '999999', email: 'teste@teste.com' },
    { id: 2, nome: 'Bruno', celular: '88888', email: 'teste2@teste.com' },
    { id: 3, nome: 'Lucas', celular: '777777', email: 'teste3@teste.com' },
  ];
}
