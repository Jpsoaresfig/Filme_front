import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmesService } from '../../service/filmes.service';
import { Filme } from '../../models/filme.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-filmes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
<div style="text-align: center;">
  <button routerLink="/add-filme" style="margin-bottom: 20px; padding: 10px 20px; background: #3498db; color: white; border: none; border-radius: 6px; cursor: pointer;">
    Adicionar Filme
  </button>
</div>
    <h2>Lista de Filmes</h2>
    <ul *ngIf="filmes">
      <li *ngFor="let filme of filmes">
        <img [src]="filme.imagem" alt="{{ filme.titulo }}" width="100" />
        <h3>{{ filme.titulo }} ({{ filme.anoLancamento }})</h3>
        <p><strong>Gênero:</strong> {{ filme.genero }}</p>
        <p><strong>Descrição:</strong> {{ filme.descricao }}</p>
        <p><strong>Avaliação:</strong> {{ filme.avaliacao }}/10</p>
        <p><strong>Assistido em:</strong> {{ filme.dataAssistido }}</p>
        <hr />
      </li>
    </ul>
    <p *ngIf="!filmes">Carregando filmes...</p>
  `,
  styleUrls: ['./home.component.css']
})
export class FilmesComponent {
  private filmesService = inject(FilmesService);
  filmes: Filme[] | null = null;

  constructor() {
    this.filmesService.getFilmes().subscribe((data) => {
      this.filmes = data;
    });
  }
}
