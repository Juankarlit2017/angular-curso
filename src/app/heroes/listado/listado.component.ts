import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent  {

heroes: string [] = ['Spiderman','Iroman','Gohan','Capitana Marvel']
heroeBorrado: string = '';

borrandoHeroe(){

  //console.log ('Borrando Heroe.....');
  //this.heroes.splice(2)
 this.heroeBorrado = this.heroes.shift() || '';

}

}
