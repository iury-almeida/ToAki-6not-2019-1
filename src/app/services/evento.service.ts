import { Injectable } from '@angular/core';

export class Evento {

}

@Injectable({
  providedIn: 'root'
})
export class EventoService {

   eventos = [
     {
      "codigoEvento": "FaTech2020",
      "nomeEvento":"TechWeek 2020",
      "oficinas": [
        {
          "codigoOficina": "FT-0120",
          "nomeOficina": "Workshop sobre Angular",
          "local": "Fatec Franca - Saguão",
          "nomeInstrutor":"Prof. Fausto",
          "dataInicio": "2019-06-18 19:50",
          "dataTermino": "2019-06-18 20:20",
          "intervaloAntes": 15,
          "intervaloApos": 15
        },
        {
          "codigoOficina": "FT-0220",
          "nomeOficina": "Workshop sobre Ionic",
          "local":"Fatec Franca - Laboratorio 3",
          "nomeInstrutor":"Prof. Fausto",
          "dataInicio": "2020-06-19 20:30",
          "dataTermino": "2020-06-19 21:30",
          "intervaloAntes": 15,
          "intervaloApos": 15
        }
      ]
    }
  ]
  
  constructor() { }

  listarEventos() {

    for (let i=0; i<this.eventos.length; i++) {
      return this.eventos[i];
    }
    
  }

  buscarPorCodigoEvento(codEvento) {

  }

  buscarPorCodigoOficina(codOficina) {

    for (let i=0; i<this.eventos.length; i++) {
      for (let j=0; j<this.eventos[i].oficinas.length; j++) {

        if (this.eventos[i].oficinas[j].codigoOficina === codOficina) {
          let oficina = this.eventos[i].oficinas[j];
          return oficina;
        }
        
      }
    }

  }

  inserirEvento(data) {

  }

  editarEvento(codEvento) {

  }

  excluirEvento(codEvento) {

  }

}
