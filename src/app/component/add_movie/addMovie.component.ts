import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilmesService } from '../../service/filmes.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-add-filme',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  template: `
    <h2>Adicionar Filme</h2>
    <form [formGroup]="filmeForm" (ngSubmit)="onSubmit()">
      <label>Título:</label>
      <input formControlName="titulo" />

      <label>Ano de Lançamento:</label>
      <input formControlName="anoLancamento" type="number" />

      <label>Gênero:</label>
      <input formControlName="genero" />

      <label>Descrição:</label>
      <textarea formControlName="descricao"></textarea>

      <label>Avaliação (0-10):</label>
      <input formControlName="avaliacao" type="number" />

      <label>Data Assistido:</label>
      <input formControlName="dataAssistido" type="date" />

      <label>URL da Imagem:</label>
      <input formControlName="imagem" />

      <button type="submit" [disabled]="filmeForm.invalid">Salvar</button>
      <button type="reset" (click)="filmeForm.reset()">Limpar</button>
      <button routerLink="/" style="margin-left: 10px; padding: 10px 20px; background: #3498db; color: white; border: none; border-radius: 6px; cursor: pointer;">
        Voltar ao Menu
      </button>
    </form>
  `,
  styleUrls: ['./addFilme.component.css']
})
export class AddFilmeComponent {
  private fb = inject(FormBuilder);
  private filmesService = inject(FilmesService);

  filmeForm: FormGroup = this.fb.group({
    titulo: ['', Validators.required],
    anoLancamento: ['', Validators.required],
    genero: ['', Validators.required],
    descricao: [''],
    avaliacao: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
    dataAssistido: ['', Validators.required],
    imagem: ['']
  });

  onSubmit() {
    if (this.filmeForm.valid) {
      this.filmesService.adicionarFilme(this.filmeForm.value).subscribe(() => {
        alert('Filme adicionado com sucesso!');
        this.filmeForm.reset();
      });
    }
  }
}
