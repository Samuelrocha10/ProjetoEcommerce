import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-honda',
  templateUrl: './honda.component.html',
  styleUrls: ['./honda.component.css']
})
export class HondaComponent implements OnInit {
carrohonda = [ 
  {nome:'honda civic',
  imagem:'assets/honda/hondacivic.jpg',
  valor:'R$107.000',
  cor: 'branco'}, 

  {nome:'honda cr-v',
  imagem:'assets/honda/hondacr-v.jpg',
  valor:'R$274.000',
  cor: 'prata'},

  {nome:'honda accord',
  imagem:'assets/honda/hondaaccord.jpg',
  valor:'R$310.000',
  cor: 'branco'},

  {nome:'honda city',
  imagem:'assets/honda/hondacity.jpg',
  valor:'R$118.000',
  cor: 'vermelho'},

  {nome:'honda fit',
  imagem:'assets/honda/hondafit.jpg',
  valor:'R$78.000',
  cor: 'prata'},

  {nome:'honda wr',
  imagem:'assets/honda/hondawr.jpg',
  valor:'R$83.000',
  cor: 'preto'},

  {nome:'honda hr-v',
  imagem:'assets/honda/hondahr-v.jpg',
  valor:'R$119.000',
  cor: 'branco'},

  {nome:'honda Jazz',
  imagem:'assets/honda/hondajazz.jpg',
  valor:'R$87.000',
  cor: 'branco'},

  {nome:'honda NSX',
  imagem:'assets/honda/hondansx.jpg',
  valor:'R$604.000',
  cor: 'vermelho'},

  {nome:'honda e',
  imagem:'assets/honda/hondae.jpg',
  valor:'R$29.000',
  cor: 'branco'}
]
  constructor() { }

  ngOnInit(): void {
  }

}
