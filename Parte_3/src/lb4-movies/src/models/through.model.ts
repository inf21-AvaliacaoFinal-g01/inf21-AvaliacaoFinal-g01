import {Entity, model, property} from '@loopback/repository';

@model()
export class Through extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  movie_id: number;

  @property({
    type: 'number',
    required: true,
  })
  genre_id: number;


  constructor(data?: Partial<Through>) {
    super(data);
  }
}

export interface ThroughRelations {
  // describe navigational properties here
}

export type ThroughWithRelations = Through & ThroughRelations;
