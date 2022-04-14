import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  itensLista: items[] = [
    {
      id:1,
      icone:'phone-portrait-outline',
      nome:'Fogão',
      link:'/item'
    },
    {
      id:2,
      icone:'save-outline',
      nome:'Mesa',
      link:'/item'
    },
    {
      id:3,
      icone:'trophy-outline',
      nome:'Cadeira',
      link:'/item'
    }        


  ];

  constructor() { }

  ngOnInit() {
  }

  deletar(id){
    console.log("Id: "+id);
  }



}

interface items{
  id:number;
  icone:string;
  nome:string;
  link:string;
}
