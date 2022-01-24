import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Actor, ActorRelations, Movies} from '../models';
import {MoviesRepository} from './movies.repository';

export class ActorRepository extends DefaultCrudRepository<
  Actor,
  typeof Actor.prototype.id,
  ActorRelations
> {

  public readonly actorMovies: HasManyRepositoryFactory<Movies, typeof Actor.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('MoviesRepository') protected moviesRepositoryGetter: Getter<MoviesRepository>,
  ) {
    super(Actor, dataSource);
    this.actorMovies = this.createHasManyRepositoryFactoryFor('actorMovies', moviesRepositoryGetter,);
    this.registerInclusionResolver('actorMovies', this.actorMovies.inclusionResolver);
  }
}
