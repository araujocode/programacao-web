import { Component } from '@angular/core';

interface Produto {
  nome: string;
  preco: number;
  descricao: string;
  emEstoque: boolean;
}

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent {
  produtos: Produto[] = [
    {
      nome: 'Produto 1',
      preco: 100,
      descricao: 'Descrição do produto 1',
      emEstoque: true,
    },
    {
      nome: 'Produto 2',
      preco: 150,
      descricao: 'Descrição do produto 2',
      emEstoque: false,
    },
    {
      nome: 'Produto 3',
      preco: 200,
      descricao: 'Descrição do produto 3',
      emEstoque: true,
    },
  ];
}
