import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public namesHero: string[] = ['Ironman','Hulk','Spiderman','Capitan America']
  public deleteHero?: string ;

  deleteLastHero(): void {
    this.deleteHero = this.namesHero.pop();
    console.log(this.deleteHero);
  }

}
