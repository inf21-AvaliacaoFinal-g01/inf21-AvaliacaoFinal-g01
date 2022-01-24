import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Actor} from './actor.model';
import {Director} from './director.model';
import {Genre} from './genre.model';
import {Through} from './through.model';

@model()
export class Movies extends Entity {
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
  language: string;

  @property({
    type: 'string',
    required: true,
  })
  original_title: string;

  @property({
    type: 'date',
    required: true,
  })
  release_date: string;

  @property({
    type: 'number',
    required: true,
  })
  runtime: number;
  @belongsTo(() => Actor, {name: 'moviesActor'})
  actor_id: number;

  @belongsTo(() => Director, {name: 'moviesDirector'})
  director_id: number;

  @hasMany(() => Genre, {through: {model: () => Through, keyFrom: 'movie_id', keyTo: 'genre_id'}})
  moviesGenre: Genre[];

  constructor(data?: Partial<Movies>) {
    super(data);
  }
}

export interface MoviesRelations {
  // describe navigational properties here
}

export type MoviesWithRelations = Movies & MoviesRelations;
