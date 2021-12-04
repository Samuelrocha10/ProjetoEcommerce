import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citroen',
  templateUrl: './citroen.component.html',
  styleUrls: ['./citroen.component.css']
})
export class CitroenComponent implements OnInit {
carroCitroen = [ 
  {nome:'citroen c3',
  imagem:'assets/citroen/citroenc3.jpg',
  valor:'R$62.000',
  cor: 'branco'}, 

  {nome:'citroen c4 cactus',
  imagem:'assets/citroen/citroenc4cactus.jpg',
  valor:'R$115.000',
  cor: 'prata'},

  {nome:'citroen c4 lounge',
  imagem:'assets/citroen/citroenc4lounge.jpg',
  valor:'R$102.000',
  cor: 'branco'},

  {nome:'citroen c4 picasso',
  imagem:'assets/citroen/citroenc4picasso.jpg',
  valor:'R$115.000',
  cor: 'branco'},

  {nome:'citroen jumper',
  imagem:'assets/citroen/citroenjumper.jpg',
  valor:'R$233.000',
  cor: 'prata'},

  {nome:'aircroos',
  imagem:'assets/citroen/aircroos.jpg',
  valor:'R$73.000',
  cor: 'prata'},

  {nome:'berlingo',
  imagem:'assets/citroen/berlingo.jpg',
  valor:'R$64.000',
  cor: 'branco'},

  {nome:'jumpy',
  imagem:'assets/citroen/jumpy.jpeg',
  valor:'R$226.000',
  cor: 'branco'},

  {nome:'grand c4 picasso',
  imagem:'assets/citroen/grandc4picassopreto.jpg',
  valor:'R$139.000',
  cor: 'preto'},

  {nome:'citroen ds3',
  imagem:'assets/citroen/citroends3.jpg',
  valor:'R$59.000',
  cor: 'amarelo'}
]
  constructor() { }

  ngOnInit(): void {
  }

}
