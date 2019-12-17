import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../servicios/mensaje.service';

@Component({
  selector: 'app-remitente',
  templateUrl: './remitente.component.html',
  styleUrls: ['./remitente.component.scss']
})
export class RemitenteComponent implements OnInit {
  mensaje: string;
  constructor(private mensajeService:MensajeService) { }

  ngOnInit() {

  }

  enviarMensaje() {
    this.mensajeService.actualizarMensaje(this.mensaje);
  }

}
