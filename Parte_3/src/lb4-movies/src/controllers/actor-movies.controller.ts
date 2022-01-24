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
  Actor,
  Movies,
} from '../models';
import {ActorRepository} from '../repositories';

export class ActorMoviesController {
  constructor(
    @repository(ActorRepository) protected actorRepository: ActorRepository,
  ) { }

  @get('/actors/{id}/movies', {
    responses: {
      '200': {
        description: 'Array of Actor has many Movies',
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
    return this.actorRepository.actorMovies(id).find(filter);
  }

  @post('/actors/{id}/movies', {
    responses: {
      '200': {
        description: 'Actor model instance',
        content: {'application/json': {schema: getModelSchemaRef(Movies)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Actor.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Movies, {
            title: 'NewMoviesInActor',
            exclude: ['id'],
            optional: ['actor_id']
          }),
        },
      },
    }) movies: Omit<Movies, 'id'>,
  ): Promise<Movies> {
    return this.actorRepository.actorMovies(id).create(movies);
  }

  @patch('/actors/{id}/movies', {
    responses: {
      '200': {
        description: 'Actor.Movies PATCH success count',
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
    return this.actorRepository.actorMovies(id).patch(movies, where);
  }

  @del('/actors/{id}/movies', {
    responses: {
      '200': {
        description: 'Actor.Movies DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Movies)) where?: Where<Movies>,
  ): Promise<Count> {
    return this.actorRepository.actorMovies(id).delete(where);
  }
}
