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
Genre,
Through,
Movies,
} from '../models';
import {GenreRepository} from '../repositories';

export class GenreMoviesController {
  constructor(
    @repository(GenreRepository) protected genreRepository: GenreRepository,
  ) { }

  @get('/genres/{id}/movies', {
    responses: {
      '200': {
        description: 'Array of Genre has many Movies through Through',
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
    return this.genreRepository.genreMovies(id).find(filter);
  }

  @post('/genres/{id}/movies', {
    responses: {
      '200': {
        description: 'create a Movies model instance',
        content: {'application/json': {schema: getModelSchemaRef(Movies)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Genre.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Movies, {
            title: 'NewMoviesInGenre',
            exclude: ['id'],
          }),
        },
      },
    }) movies: Omit<Movies, 'id'>,
  ): Promise<Movies> {
    return this.genreRepository.genreMovies(id).create(movies);
  }

  @patch('/genres/{id}/movies', {
    responses: {
      '200': {
        description: 'Genre.Movies PATCH success count',
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
    return this.genreRepository.genreMovies(id).patch(movies, where);
  }

  @del('/genres/{id}/movies', {
    responses: {
      '200': {
        description: 'Genre.Movies DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Movies)) where?: Where<Movies>,
  ): Promise<Count> {
    return this.genreRepository.genreMovies(id).delete(where);
  }
}
