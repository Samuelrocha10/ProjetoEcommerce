import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-renault',
  templateUrl: './renault.component.html',
  styleUrls: ['./renault.component.css']
})
export class RenaultComponent implements OnInit {
carrorenault = [ 
  {nome:'renault captur',
  imagem:'assets/renault/renaultcaptur.jpg',
  valor:'R$116.000',
  cor: 'laranja'}, 

  {nome:'duster',
  imagem:'assets/renault/duster.jpg',
  valor:'R$96.000',
  cor: 'prata'},

  {nome:'kwid',
  imagem:'assets/renault/kwid.jpg',
  valor:'R$48.000',
  cor: 'vermelho'},

  {nome:'renault zoe',
  imagem:'assets/renault/renaultzoe.jpg',
  valor:'R$204.000',
  cor: 'azul'},

  {nome:'sandero',
  imagem:'assets/renault/sandero.jpeg',
  valor:'R$72.000',
  cor: 'branco'},

  {nome:'renault logan',
  imagem:'assets/renault/renaultlogan.jpg',
  valor:'R$76.000',
  cor: 'branco'},

  {nome:'stepway',
  imagem:'assets/renault/stepway.jpg',
  valor:'R$89.000',
  cor: 'prata'},

  {nome:'duster oroch',
  imagem:'assets/renault/dusteroroch.jpeg',
  valor:'R$116.000',
  cor: 'prata'},

  {nome:'renault kangoo',
  imagem:'assets/renault/renaultkangoo.jpg',
  valor:'R$134.000',
  cor: 'branco'},

  {nome:'master chassi',
  imagem:'assets/renault/masterchassi.jpg',
  valor:'R$183.000',
  cor: 'branco'}
]
  constructor() { }

  ngOnInit(): void {
  }

}
