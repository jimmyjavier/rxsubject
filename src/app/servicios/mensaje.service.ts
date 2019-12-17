import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  mensaje = new Subject<string>();
  constructor() { }

  obtenerMensaje(): Observable<string> {
    return this.mensaje.asObservable();
  }

  actualizarMensaje(mensaje: string) {
    this.mensaje.next(mensaje);
  }

}
