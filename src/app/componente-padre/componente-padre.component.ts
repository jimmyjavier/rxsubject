import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.scss']
})
export class ComponentePadreComponent implements OnInit {  
  @Input()
  mensajeAbuelo: string;
  constructor() { }

  ngOnInit() {
  }

}
