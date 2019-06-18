import { Component, OnInit } from '@angular/core';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  eventos: any = [];
  oficinas: any = [];
  panelOpenState = false;

  constructor(
    private eventoSrv: EventoService,
  ) { }

  ngOnInit() {
    this.listarEvento();
  }

  listarEvento() {
    try {

      let event = this.eventoSrv.listarEventos();
      this.eventos.push(event);
      this.oficinas = event.oficinas

    }
    catch (e) {

    }
  }

}
