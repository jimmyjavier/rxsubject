import { Component, OnInit, Input } from '@angular/core';
import { MensajeService } from '../servicios/mensaje.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-componente-nieto',
  templateUrl: './componente-nieto.component.html',
  styleUrls: ['./componente-nieto.component.scss']
})
export class ComponenteNietoComponent implements OnInit {
  @Input()
  mensajeAbuelo: string;
  mensaje: string;
  subscription: Subscription;

  constructor(private mensajeService: MensajeService) {
    this.subscription = this.mensajeService.obtenerMensaje()
      .subscribe(mensaje => {
        this.mensaje = mensaje;
      });
  }

  ngOnInit() {
  }

}
