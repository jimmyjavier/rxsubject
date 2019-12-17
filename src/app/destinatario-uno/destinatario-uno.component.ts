import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../servicios/mensaje.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-destinatario-uno',
  templateUrl: './destinatario-uno.component.html',
  styleUrls: ['./destinatario-uno.component.scss']
})
export class DestinatarioUnoComponent implements OnInit {
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
