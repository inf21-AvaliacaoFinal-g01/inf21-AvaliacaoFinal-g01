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
Movies,
Through,
Genre,
} from '../models';
import {MoviesRepository} from '../repositories';

export class MoviesGenreController {
  constructor(
    @repository(MoviesRepository) protected moviesRepository: MoviesRepository,
  ) { }

  @get('/movies/{id}/genres', {
    responses: {
      '200': {
        description: 'Array of Movies has many Genre through Through',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Genre)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Genre>,
  ): Promise<Genre[]> {
    return this.moviesRepository.moviesGenre(id).find(filter);
  }

  @post('/movies/{id}/genres', {
    responses: {
      '200': {
        description: 'create a Genre model instance',
        content: {'application/json': {schema: getModelSchemaRef(Genre)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Movies.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Genre, {
            title: 'NewGenreInMovies',
            exclude: ['id'],
          }),
        },
      },
    }) genre: Omit<Genre, 'id'>,
  ): Promise<Genre> {
    return this.moviesRepository.moviesGenre(id).create(genre);
  }

  @patch('/movies/{id}/genres', {
    responses: {
      '200': {
        description: 'Movies.Genre PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Genre, {partial: true}),
        },
      },
    })
    genre: Partial<Genre>,
    @param.query.object('where', getWhereSchemaFor(Genre)) where?: Where<Genre>,
  ): Promise<Count> {
    return this.moviesRepository.moviesGenre(id).patch(genre, where);
  }

  @del('/movies/{id}/genres', {
    responses: {
      '200': {
        description: 'Movies.Genre DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Genre)) where?: Where<Genre>,
  ): Promise<Count> {
    return this.moviesRepository.moviesGenre(id).delete(where);
  }
}
