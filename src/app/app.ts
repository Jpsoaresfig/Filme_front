import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <div style="text-align: center;"><h1>Bem-vindo ao Catálogo</h1></div>
    <router-outlet></router-outlet>
  `
})
export class App {}
