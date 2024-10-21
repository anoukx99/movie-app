import { Component } from '@angular/core';
import { MovieService } from '../movies.service';
import { OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-feature-page',
  standalone: true,
  imports: [],
  templateUrl: './feature-page.component.html',
  styleUrl: './feature-page.component.scss',
})
export class FeaturePageComponent implements OnInit {
  movies$: Movie[] = [];
  error = '';

  constructor(private movieService: MovieService) {}

  movieTitles = ['Joker', 'Joker: Folie à Deux'];

  ngOnInit() {
    for (const title of this.movieTitles) {
      this.movieService.getMovieByTitle(title, 'full').subscribe((res) => {
        this.movies$.push(res);
      });
    }
  }
}
