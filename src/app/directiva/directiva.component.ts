import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent {
  habilitar:boolean = true;
  listaCurso:string[] = ['Typescript', 'Javascript', 'java SE', 'C#', 'PHP'];
  constructor() {}

  setHabilitar(): void {
    this.habilitar = (this.habilitar == true)? false: true
  }
}
