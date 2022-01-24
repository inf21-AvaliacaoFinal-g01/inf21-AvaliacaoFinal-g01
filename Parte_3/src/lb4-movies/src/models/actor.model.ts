import {Entity, model, property, hasMany} from '@loopback/repository';
import {Movies} from './movies.model';

@model()
export class Actor extends Entity {
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

  @hasMany(() => Movies, {keyTo: 'actor_id'})
  actorMovies: Movies[];

  constructor(data?: Partial<Actor>) {
    super(data);
  }
}

export interface ActorRelations {
  // describe navigational properties here
}

export type ActorWithRelations = Actor & ActorRelations;
