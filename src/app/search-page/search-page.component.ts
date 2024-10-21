import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../movies.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
})
export class SearchPageComponent {
  movies$: Movie[] = [];
  chosen_length = 'full';
  error: string | undefined;
  formData = {
    searchText: '',
    plot_length: 'full',
  };

  constructor(private movieService: MovieService) {}

  getTagColor(type: string) {
    if (type == 'movie') {
      return 'bg-yellow-500';
    } else if (type == 'episode') {
      return 'bg-blue-500';
    } else if (type == 'series') {
      return 'bg-green-500';
    } else {
      return 'bg-gray-500';
    }
  }

  toggleReadMore(movie: any) {
    movie.showMore = !movie.showMore;
  }

  stringToList(value: string | string[]) {
    if (!Array.isArray(value)) {
      return value.split(',').map((word) => word.trim());
    } else {
      return value;
    }
  }

  onSubmit() {
    this.error = '';
    this.movies$ = [];

    // Save length since "show More" button is only shown at long plots.
    this.chosen_length = this.formData.plot_length;

    if (!this.formData.searchText) {
      // Validate that something has been filled in!
      this.error = 'Title cannot be empty';
    } else {
      // First get all search results.
      this.movieService
        .searchMovieByTitle(this.formData.searchText)
        .subscribe((res) => {
          if (res.Response == 'True') {
            // If there is a response, get data of top 5 movies.
            const topFiveMovies = res.Search.slice(0, 5);

            for (const movie of topFiveMovies) {
              this.movieService
                .getMovieById(movie.imdbID, this.formData.plot_length)
                .subscribe((res) => {
                  if (res.Response == 'True') {
                    // If plot is long, show More button
                    if (res.Plot.length > 200) {
                      res.showMore = true;
                    } else {
                      res.showMore = false;
                    }

                    // Converts string to lists
                    res.Actors = this.stringToList(res.Actors);
                    res.Director = this.stringToList(res.Director);
                    res.Genre = this.stringToList(res.Genre);

                    // Push all data
                    this.movies$.push(res);
                  } else {
                    this.error = res.Error;
                  }
                });
            }
          } else {
            this.error = res.Error;
          }
        });
    }
  }
}
