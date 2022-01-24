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
  Director,
} from '../models';
import {MoviesRepository} from '../repositories';

export class MoviesDirectorController {
  constructor(
    @repository(MoviesRepository)
    public moviesRepository: MoviesRepository,
  ) { }

  @get('/movies/{id}/director', {
    responses: {
      '200': {
        description: 'Director belonging to Movies',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Director)},
          },
        },
      },
    },
  })
  async getDirector(
    @param.path.number('id') id: typeof Movies.prototype.id,
  ): Promise<Director> {
    return this.moviesRepository.moviesDirector(id);
  }
}
