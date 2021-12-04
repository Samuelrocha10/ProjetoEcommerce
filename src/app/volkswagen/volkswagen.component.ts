import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volkswagen',
  templateUrl: './volkswagen.component.html',
  styleUrls: ['./volkswagen.component.css']
})
export class VolkswagenComponent implements OnInit {
carrovolkswagen = [ 
  {nome:'T-cross',
  imagem:'assets/volkswagen/t-cross.jpg',
  valor:'R$92.000',
  cor: 'preto'}, 

  {nome:'virtus highline',
  imagem:'assets/volkswagen/virtushighline.jpg',
  valor:'R$85.000',
  cor: 'prata'},

  {nome:'taos highline',
  imagem:'assets/volkswagen/taoshighline.jpg',
  valor:'R$197.000',
  cor: 'branco'},

  {nome:'nivus comfortline',
  imagem:'assets/volkswagen/nivuscomfortline.jpg',
  valor:'R$115.000',
  cor: 'vermelho'},

  {nome:'amarok',
  imagem:'assets/volkswagen/amarok.jpg',
  valor:'R$279.000',
  cor: 'branco'},

  {nome:'polo novo',
  imagem:'assets/volkswagen/polonovo.jpg',
  valor:'R$78.000',
  cor: 'azul'},

  {nome:'gol',
  imagem:'assets/volkswagen/gol.jpg',
  valor:'R$60.000',
  cor: 'branco'},

  {nome:'voyage',
  imagem:'assets/volkswagen/voyage.jpg',
  valor:'R$70.000',
  cor: 'prata'},

  {nome:'saveiro',
  imagem:'assets/volkswagen/saveiro.jpg',
  valor:'R$101.000',
  cor: 'azul'},

  {nome:'jetta',
  imagem:'assets/volkswagen/jetta.jpg',
  valor:'R$137.000',
  cor: 'prata'}
]
  constructor() { }

  ngOnInit(): void {
  }

}