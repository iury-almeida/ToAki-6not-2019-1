import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  instrucao() {
    this.snackBar.open('Bem-vindo às palestras da Fatec, confirme sua localização próxima a faculdade através da opção **CHECK-IN** do menu no canto superior esquerdo', 'OK', {duration: 20000});
  }

}
