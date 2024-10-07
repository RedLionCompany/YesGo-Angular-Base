import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public nombre: string = 'ironman';
  public edad:   number = 45; 


  get capitalize(): string {
    return this.nombre.toUpperCase();
  }

  getDescription (): string {
      return `${this.nombre} - ${this.edad}`
  }

  changeName (): void {
    this.nombre = 'Spiderman'
  }

  changeAge (): void {
    this.edad = 23
  }

  reset() {
    this.nombre = 'ironman';
    this.edad = 45;
  }
    
}


