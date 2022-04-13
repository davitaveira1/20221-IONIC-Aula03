import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome : string="";
  telefone : string="";
  matricula : string="";
  sexo : string="";
  bilingue : boolean;
  bilingueResult : string;
  tec1 : boolean;
  tec2 : boolean;
  tec3 : boolean;
  tec1Result : string;
  tec2Result : string;
  tec3Result : string;

  constructor() {}

  cadastrar(){

    console.log("bilingue: "+this.bilingue);
    console.log("C1: "+this.tec1+" C2: "+this.tec2+" C3: "+this.tec3);

    if(this.bilingue){
      this.bilingueResult = "Bilingue";
    }else{
      this.bilingueResult = "Não Bilingue";
    }    

    if(this.tec1){
      this.tec1Result = "PHP";
    }else{
      this.tec1Result = "";
    }

    if(this.tec2){
      this.tec2Result = "C#";
    }else{
      this.tec2Result = "";
    }

    if(this.tec3){
      this.tec3Result = "Angular";
    }else{
      this.tec3Result = "";
    }    

  }

}
