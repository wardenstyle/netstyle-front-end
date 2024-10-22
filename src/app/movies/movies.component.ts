import { CommonModule } from '@angular/common'; // Importez CommonModule
import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Movie } from './movie.model'; // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  movies: Movie[] = []; // Typage du tableau avec l'interface Movie

  constructor(private http: HttpClient) {
    this.fetchData(); // Appeler fetchData lors de l'initialisation
  }

  /** pour le local */
  // fetchData() {
  //   this.http.get<Movie[]>('http://localhost/movies').subscribe(response => {
  //     console.log(response);
  //     this.movies = response; // Ici, response est maintenant typé comme Movie[]
  //   });
  // }

  /** pour la prod (symfony) */
  // fetchData() {
  //   this.http.get<Movie[]>('https://netstyle.alwaysdata.net/movies').subscribe(response => {
  //     console.log(response);
  //     this.movies = response; // Ici, response est maintenant typé comme Movie[]
  //   });
  // }

    /** pour la prod (netAPI php) */
    fetchData() {
      this.http.get<Movie[]>('/movies.php').subscribe(response => {
        console.log(response);
        this.movies = response; // Ici, response est maintenant typé comme Movie[]
      });
    }

  
}




