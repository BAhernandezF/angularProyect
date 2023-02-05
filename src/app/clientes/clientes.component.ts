import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit{

  clientes: Cliente[] = [
    {id: 1, nombre: 'Bastian',apellido: 'Hernandez',createAt: '2023-02-02',email: 'mail1@mail.com',},
    {id: 2, nombre: 'Diego',apellido: 'Quezada',createAt: '2023-02-02',email: 'mail2@mail.com',},
    {id: 3, nombre: 'Martin',apellido: 'Meliman',createAt: '2023-02-02',email: 'mail3@mail.com',},
    {id: 4, nombre: 'Elias',apellido: 'Gracia',createAt: '2023-02-02',email: 'mail4@mail.com',},
    {id: 5, nombre: 'Benjamin',apellido: 'Peña',createAt: '2023-02-02',email: 'mail5@mail.com',},
  ];

  constructor() {}
  ngOnInit() {
    
  }
}
