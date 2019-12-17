import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-abuelo',
  templateUrl: './componente-abuelo.component.html',
  styleUrls: ['./componente-abuelo.component.scss']
})
export class ComponenteAbueloComponent implements OnInit {

  mensaje = 'Mensaje del componente Abuelo';

  constructor() { }

  ngOnInit() {
  }

}
