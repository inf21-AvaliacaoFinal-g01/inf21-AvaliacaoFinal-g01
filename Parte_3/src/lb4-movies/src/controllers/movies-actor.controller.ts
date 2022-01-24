import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Movies,
  Actor,
} from '../models';
import {MoviesRepository} from '../repositories';

export class MoviesActorController {
  constructor(
    @repository(MoviesRepository)
    public moviesRepository: MoviesRepository,
  ) { }

  @get('/movies/{id}/actor', {
    responses: {
      '200': {
        description: 'Actor belonging to Movies',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Actor)},
          },
        },
      },
    },
  })
  async getActor(
    @param.path.number('id') id: typeof Movies.prototype.id,
  ): Promise<Actor> {
    return this.moviesRepository.moviesActor(id);
  }
}
