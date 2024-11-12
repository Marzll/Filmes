import { Injectable } from '@angular/core';
import { Filme } from './filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private filmes = [
    {
      Title: 'Batman',
      Year: '1989',
      Director: 'Tim Burton',
      Country: 'EUA',
      Genre: 'Action',
      Poster: 'https://m.media-amazon.com/images/M/MV5BYzZmZWViM2EtNzhlMi00NzBlLWE0MWEtZDFjMjk3YjIyNTBhXkEyXkFqcGc@._V1_SX300.jpg'
    },
    {
      Title: 'The Godfather',
      Year: '1972',
      Director: 'Francis Ford Coppola',
      Country: 'EUA',
      Genre: 'Crime',
      Poster: 'https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_SX300.jpg'
    }
  ]
  constructor() { }

  buscarFilmePorTitulo(titulo: string): Filme | undefined{
    return this.filmes.find(
      f => f.Title.toLowerCase() === titulo.trim().toLowerCase())
  }
}
