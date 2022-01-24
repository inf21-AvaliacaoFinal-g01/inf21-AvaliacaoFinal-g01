import {Entity, model, property, hasMany} from '@loopback/repository';
import {Movies} from './movies.model';
import {Through} from './through.model';

@model()
export class Genre extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  genre: string;

  @hasMany(() => Movies, {through: {model: () => Through, keyFrom: 'genre_id', keyTo: 'movie_id'}})
  genreMovies: Movies[];

  constructor(data?: Partial<Genre>) {
    super(data);
  }
}

export interface GenreRelations {
  // describe navigational properties here
}

export type GenreWithRelations = Genre & GenreRelations;
