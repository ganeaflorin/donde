export interface Movie {
  title: string;
  id: number;
  vote_count: number;
  poster_path: string;
  release_date: string;
  overview: string;
}

export interface SelectOption {
  id: string;
  title: string;
  posterLink: string;
  year: string;
  overview: string;
}

export enum Platforms {
  NETFLIX = 'Netflix',
  MAX = 'Max',
  DISNEY = 'Disney Plus',
  SKY = 'SkyShowtime',
  AMAZON = 'Amazon Prime Video',
}
