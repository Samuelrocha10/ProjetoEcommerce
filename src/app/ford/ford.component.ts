import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrls: ['./ford.component.css']
})
export class FordComponent implements OnInit {
carroford = [ 
  {nome:'ranger',
  imagem:'assets/ford/ranger.jpg',
  valor:'R$228.000',
  cor: 'branco'}, 

  {nome:'territory',
  imagem:'assets/ford/territory.jpg',
  valor:'R$197.000',
  cor: 'preto'},

  {nome:'bronco',
  imagem:'assets/ford/bronco.jpg',
  valor:'R$264.000',
  cor: 'vermelho'},

  {nome:'ecosport',
  imagem:'assets/ford/ecosport.jpg',
  valor:'R$87.000',
  cor: 'branco'},

  {nome:'ford KA',
  imagem:'assets/ford/fordka.jpg',
  valor:'R$65.000',
  cor: 'prata'},

  {nome:'focus SE',
  imagem:'assets/ford/focusse.jpg',
  valor:'R$86.000',
  cor: 'vermelho'},

  {nome:'evos',
  imagem:'assets/ford/evos.jpg',
  valor:'R$255.000',
  cor: 'branco'},

  {nome:'edge',
  imagem:'assets/ford/edge.jpeg',
  valor:'R$168.000',
  cor: 'preto'},

  {nome:'ford KA hatch',
  imagem:'assets/ford/fordkahatch.jpg',
  valor:'R$68.000',
  cor: 'branco'},

  {nome:'ford fusion',
  imagem:'assets/ford/fordfusion.jpg',
  valor:'R$115.000',
  cor: 'branco'}
]
  constructor() { }

  ngOnInit(): void {
  }

}
