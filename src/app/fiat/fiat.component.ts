import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrls: ['./fiat.component.css']
})
export class FiatComponent implements OnInit {
carrofiat = [ 
  {nome:'fiat pulse',
  imagem:'assets/fiat/fiatpulse.jpg',
  valor:'R$79.000',
  cor: 'branco'}, 

  {nome:'cronos drive',
  imagem:'assets/fiat/cronosdrive.jpg',
  valor:'R$78.000',
  cor: 'preto'},

  {nome:'mobi',
  imagem:'assets/fiat/mobi.jpg',
  valor:'R$55.000',
  cor: 'vermelho'},

  {nome:'toro',
  imagem:'assets/fiat/toro.jpg',
  valor:'R$185.000',
  cor: 'branco'},

  {nome:'siena',
  imagem:'assets/fiat/siena.jpg',
  valor:'R$55.000',
  cor: 'preto'},

  {nome:'uno',
  imagem:'assets/fiat/uno.png',
  valor:'R$55.000',
  cor: 'preto'},

  {nome:'fiat 500',
  imagem:'assets/fiat/fiat500.jpg',
  valor:'R$239.000',
  cor: 'prata'},

  {nome:'fiat argo',
  imagem:'assets/fiat/fiatargo.jpg',
  valor:'R$62.000',
  cor: 'preto'},

  {nome:'strada',
  imagem:'assets/fiat/strada.jpg',
  valor:'R$74.000',
  cor: 'vermelho'},

  {nome:'punto',
  imagem:'assets/fiat/punto.jpg',
  valor:'R$101.000',
  cor: 'branco'}
]
  constructor() { }

  ngOnInit(): void {
  }

}

