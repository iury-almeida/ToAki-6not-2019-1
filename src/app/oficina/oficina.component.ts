import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from '../services/evento.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-oficina',
  templateUrl: './oficina.component.html',
  styleUrls: ['./oficina.component.scss']
})
export class OficinaComponent implements OnInit {

  codOficina: String;
  oficina: any = [];

  constructor(
    private snackBar: MatSnackBar, 
    private route: ActivatedRoute,
    private eventoSrv: EventoService,
  ) { }

  async ngOnInit() {
    await this.exibirOficina();
  }

  async exibirOficina () {
    this.codOficina = await this.route.snapshot.paramMap.get('codigo');

    if (this.codOficina) { 

      this.oficina.push(await this.eventoSrv.buscarPorCodigoOficina(this.codOficina));

    }

    this.validarLeitura(this.oficina[0].dataInicio, this.oficina[0].dataTermino, this.oficina[0].intervaloAntes, this.oficina[0].intervaloApos);
  }

  validarLeitura(dataInicio, dataFinal, intAntes, intApos) {

    let dataOficinaInicio = new Date(dataInicio);
    let dataOficinaTermino = new Date(dataFinal);
    
    let intervaloAntes = dataOficinaInicio.setMinutes(dataOficinaInicio.getMinutes() - intAntes);
    let intervaloApos = dataOficinaTermino.setMinutes(dataOficinaTermino.getMinutes() + intApos);

    let agora = new Date();
    let prazoInicioRegistro = new Date(intervaloAntes);
    let prazoFinalRegistro = new Date(intervaloApos);

    if ((agora <= prazoInicioRegistro) || (agora >= prazoFinalRegistro)) {
      this.snackBar.open("Leitura realizada fora do prazo", '', {duration: 8000});
    }
    else {
      this.snackBar.open("Leitura realizada dentro do prazo", '', {duration: 8000});
    }
  }

}