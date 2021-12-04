import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chevrolet',
  templateUrl: './chevrolet.component.html',
  styleUrls: ['./chevrolet.component.css']
  })
export class ChevroletComponent implements OnInit {
carrochevrolet = [
  {nome:'chevrolet cruze', 
imagem:'assets/chevrolet/chevroletcruze.jpg',
valor:'R$132.000',
cor: 'branco'}, 

{nome:'onix',
imagem:'assets/chevrolet/onix.jpg',
valor:'R$62.000',
cor: 'prata'},

{nome:'chevrolet tracker',
imagem:'assets/chevrolet/chevrolettracker.jpg',
valor:'R$70.000',
cor: 'branco'},

{nome:'camaro',
imagem:'assets/chevrolet/camaroo.jpg',
valor:'R$406.000',
cor: 'azul'},

{nome:'corsa',
imagem:'assets/chevrolet/corsa.jpg',
valor:'R$23.000',
cor: 'vermelho'},

{nome:'captiva',
imagem:'assets/chevrolet/captiva.jpg',
valor:'R$65.000',
cor: 'preto'},

{nome:'prisma',
imagem:'assets/chevrolet/prisma.jpg',
valor:'R$66.000',
cor: 'vermelho'},

{nome:'celta',
imagem:'assets/chevrolet/celta.jpg',
valor:'R$31.000',
cor: 'prata'},

{nome:'chevrolet equinox',
imagem:'assets/chevrolet/chevroletequinox.jpg',
valor:'R$116.000',
cor: 'preto'},

{nome:'chevrolet spin',
imagem:'assets/chevrolet/chevroletspin.jpg',
valor:'R$69.000',
cor: 'azul'}
]





  constructor() { }

  ngOnInit(): void {
  }

}
