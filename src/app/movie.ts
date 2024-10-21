export interface Rating {
  Source: string;
  Value: string;
}

export interface Movie {
  Actors: string | string[];
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string | string[];
  Genre: string | string[];
  Language: string | string[];
  Metascore: number;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: Rating[];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
  showMore: boolean | undefined;
  Error: string | undefined;
}

export interface SearchResult {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface SearchMovie {
  Search: SearchResult[];
  totalResults: string;
  Response: string;
  Error: string | undefined;
}
