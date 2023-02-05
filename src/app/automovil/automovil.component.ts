import { Component, OnInit } from '@angular/core';
import { Automovil } from './automovil';

@Component({
  selector: 'app-automovil',
  templateUrl: './automovil.component.html',
  styleUrls: ['./automovil.component.css']
})
export class AutomovilComponent implements OnInit{
  autos: Automovil[] = [
    {id: 1, marca: 'Toyota' , modelo: 'aa'},
    {id: 2, marca: 'Audi',modelo: 'bb'},
    {id: 3, marca: 'Ford',modelo: 'cc'},
    {id: 4, marca: 'Renault',modelo: 'dd'},
    {id: 5, marca: 'Volvo',modelo: 'ee'},
  ];

  constructor() {}
  ngOnInit() {
    
  }
}

