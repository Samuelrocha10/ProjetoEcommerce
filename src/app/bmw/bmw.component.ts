import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmw',
  templateUrl: './bmw.component.html',
  styleUrls: ['./bmw.component.css']
})
export class BmwComponent implements OnInit {
carroBmw = [ 
  {nome:'BMW I8',
  imagem:'assets/bmw/bmwi8.jpg',
  valor:'R$720.000',
  cor: 'azul'}, 

  {nome:'BMW X1',
  imagem:'assets/bmw/bmwx1.jpg',
  valor:'R$269.000',
  cor: 'branco'},

  {nome:'BMW Z4',
  imagem:'assets/bmw/bmwz4.jpg',
  valor:'R$441.000',
  cor: 'vermelho'},

  {nome:'BMW M2 competition',
  imagem:'assets/bmw/bmwm2.jpg',
  valor:'R$583.000',
  cor: 'cinza'},

  {nome:'BMW I3',
  imagem:'assets/bmw/bmwi3.jpg',
  valor:'R$319.000',
  cor: 'preto'},

  {nome:'BMW Serie 3',
  imagem:'assets/bmw/bmwserie3.jpg',
  valor:'R$372.000',
  cor: 'cinza'},

  {nome:'BMW Serie 7',
  imagem:'assets/bmw/bmwserie7.jpg',
  valor:'R$689.000',
  cor: 'cinza'},

  {nome:'BMW X3',
  imagem:'assets/bmw/bmwx3.jpg',
  valor:'R$390.000',
  cor: 'branco'},

  {nome:'BMW Coupe',
  imagem:'assets/bmw/bmwcoupe.jpg',
  valor:'R$284.000',
  cor: 'azul'},

  {nome:'BMW Cabrio',
  imagem:'assets/bmw/bmwcabrio.jpg',
  valor:'R$483.000',
  cor: 'verde'}
]
  constructor() { }

  ngOnInit(): void {
  }

}
