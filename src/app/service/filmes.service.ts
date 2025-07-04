import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Filme } from '../models/filme.model';

@Injectable({ providedIn: 'root' })
export class FilmesService {
  private apiUrl = 'http://localhost:3000/filmes';

  constructor(private http: HttpClient) {}

  getFilmes() {
    return this.http.get<Filme[]>(this.apiUrl);
  }

  adicionarFilme(filme: Filme) {
    return this.http.post<Filme>(this.apiUrl, filme);
  }

  removeFilme(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
