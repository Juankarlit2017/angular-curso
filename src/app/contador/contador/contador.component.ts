import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
      
      <h1>{{titulo}}</h1>   <!--Trae la etiqueta del app.component.ts en la sección export class AppComponent-->

      <button (click)="acumular(base)"> + {{base}}</button>

      <span>{{numero2}}</span>

     <button (click)="acumular(-base)"> - {{base}}</button>
      `

})

export class ContadorComponent {

    titulo: string = 'Contador App';
    numero2: number = 10;
    base: number = 5;
   
  
    acumular(valor:number){
      this.numero2 += valor;
    }


}