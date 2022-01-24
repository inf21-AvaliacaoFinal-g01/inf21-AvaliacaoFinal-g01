import {Entity, model, property, hasMany} from '@loopback/repository';
import {Movies} from './movies.model';

@model()
export class Director extends Entity {
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
  name: string;

  @hasMany(() => Movies, {keyTo: 'director_id'})
  directorMovies: Movies[];

  constructor(data?: Partial<Director>) {
    super(data);
  }
}

export interface DirectorRelations {
  // describe navigational properties here
}

export type DirectorWithRelations = Director & DirectorRelations;
