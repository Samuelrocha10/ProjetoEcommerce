import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toyota',
  templateUrl: './toyota.component.html',
  styleUrls: ['./toyota.component.css']
})
export class ToyotaComponent implements OnInit {
carrotoyota = [ 
  {nome:'SW4 SRX',
  imagem:'assets/toyota/sw4srx.jpg',
  valor:'R$380.000',
  cor: 'branco'}, 

  {nome:'corolla',
  imagem:'assets/toyota/corolla.jpeg',
  valor:'R$102.000',
  cor: 'preto'},

  {nome:'etios X',
  imagem:'assets/toyota/etios.jpg',
  valor:'R$55.000',
  cor: 'prata'},

  {nome:'prius',
  imagem:'assets/toyota/prius.jpg',
  valor:'R$184.000',
  cor: 'prata'},

  {nome:'supra',
  imagem:'assets/toyota/supra.jpg',
  valor:'R$300.000',
  cor: 'azul'},

  {nome:'camry',
  imagem:'assets/toyota/camry.jpg',
  valor:'R$318.000',
  cor: 'preto'},

  {nome:'bandeirante',
  imagem:'assets/toyota/bandeirante.jpg',
  valor:'R$47.000',
  cor: 'branco'},

  {nome:'yaris',
  imagem:'assets/toyota/yaris.jpg',
  valor:'R$69.000',
  cor: 'vermelho'},

  {nome:'rav4',
  imagem:'assets/toyota/rav4.jpg',
  valor:'R$274.000',
  cor: 'branco'},

  {nome:'corolla altis',
  imagem:'assets/toyota/corollaaltis.jpg',
  valor:'R$130.000',
  cor: 'preto'}
]
  constructor() { }

  ngOnInit(): void {
  }



}
