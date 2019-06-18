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

    console.log(agora);
    console.log(prazoInicioRegistro);
    console.log(prazoFinalRegistro);

    if ((agora < prazoInicioRegistro) || (agora > prazoFinalRegistro)) {
      console.log("Fora do horario");
      this.snackBar.open("Leitura realizada fora do prazo", '', {duration: 8000});
      return;
    }

    console.log("Dentro do horario");
    this.snackBar.open("Leitura realizada dentro do prazo", '', {duration: 8000});
  }

}

// let data = new Date();
    
// let dia     = data.getDate();
// let mes     = data.getMonth();
// let ano     = data.getFullYear();
// let hora    = data.getHours();
// let minutos = data.getMinutes();

// console.log(`${dia}-${mes}-${ano} ${hora}:${minutos}`);