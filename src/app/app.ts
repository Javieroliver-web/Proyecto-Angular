import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   title: string = 'Hola Mundo Angular desde componente!';

   users: string[] = ['Javi', 'Juanda', 'Ana', 'Marta' ];
   
   visible: boolean = false;

   setVisible(): void {
    this.visible = this.visible? false: true;
    console.log('Hemos hecho click en setVisible');
   }
}
