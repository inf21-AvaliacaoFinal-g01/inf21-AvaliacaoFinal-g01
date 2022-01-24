import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Director,
  Movies,
} from '../models';
import {DirectorRepository} from '../repositories';

export class DirectorMoviesController {
  constructor(
    @repository(DirectorRepository) protected directorRepository: DirectorRepository,
  ) { }

  @get('/directors/{id}/movies', {
    responses: {
      '200': {
        description: 'Array of Director has many Movies',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Movies)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Movies>,
  ): Promise<Movies[]> {
    return this.directorRepository.directorMovies(id).find(filter);
  }

  @post('/directors/{id}/movies', {
    responses: {
      '200': {
        description: 'Director model instance',
        content: {'application/json': {schema: getModelSchemaRef(Movies)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Director.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Movies, {
            title: 'NewMoviesInDirector',
            exclude: ['id'],
            optional: ['director_id']
          }),
        },
      },
    }) movies: Omit<Movies, 'id'>,
  ): Promise<Movies> {
    return this.directorRepository.directorMovies(id).create(movies);
  }

  @patch('/directors/{id}/movies', {
    responses: {
      '200': {
        description: 'Director.Movies PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Movies, {partial: true}),
        },
      },
    })
    movies: Partial<Movies>,
    @param.query.object('where', getWhereSchemaFor(Movies)) where?: Where<Movies>,
  ): Promise<Count> {
    return this.directorRepository.directorMovies(id).patch(movies, where);
  }

  @del('/directors/{id}/movies', {
    responses: {
      '200': {
        description: 'Director.Movies DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Movies)) where?: Where<Movies>,
  ): Promise<Count> {
    return this.directorRepository.directorMovies(id).delete(where);
  }
}
