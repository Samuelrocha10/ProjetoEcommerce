import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hyundai',
  templateUrl: './hyundai.component.html',
  styleUrls: ['./hyundai.component.css']
})
export class HyundaiComponent implements OnInit {
carroHyundai = [ 
  {nome:'hb20',
  imagem:'assets/hyundai/hb20.jpg',
  valor:'R$56.00',
  cor: 'branco'}, 

  {nome:'creta',
  imagem:'assets/hyundai/creta.jpg',
  valor:'R$152.000',
  cor: 'preto'},

  {nome:'tucson',
  imagem:'assets/hyundai/tucson.jpeg',
  valor:'R$170.000',
  cor: 'azul'},

  {nome:'IX35',
  imagem:'assets/hyundai/ix35.jpg',
  valor:'R$124.000',
  cor: 'branco'},

  {nome:'santa fe',
  imagem:'assets/hyundai/santafe.jpg',
  valor:'R$297.000',
  cor: 'azul'},

  {nome:'azera',
  imagem:'assets/hyundai/azera.jpg',
  valor:'R$269.000',
  cor: 'branco'},

  {nome:'elantra',
  imagem:'assets/hyundai/elantra.jpg',
  valor:'R$90.000',
  cor: 'prata'},

  {nome:'I10',
  imagem:'assets/hyundai/i10.jpg',
  valor:'R$47.000',
  cor: 'branco'},

  {nome:'ioniq 5',
  imagem:'assets/hyundai/ioniq5.jpg',
  valor:'R$154.000',
  cor: 'prata'},

  {nome:'kona',
  imagem:'assets/hyundai/kona.jpg',
  valor:'R$226.000',
  cor: 'azul'}
]
  constructor() { }

  ngOnInit(): void {
  }

}
