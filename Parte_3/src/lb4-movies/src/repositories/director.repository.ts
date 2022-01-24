import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Director, DirectorRelations, Movies} from '../models';
import {MoviesRepository} from './movies.repository';

export class DirectorRepository extends DefaultCrudRepository<
  Director,
  typeof Director.prototype.id,
  DirectorRelations
> {

  public readonly directorMovies: HasManyRepositoryFactory<Movies, typeof Director.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('MoviesRepository') protected moviesRepositoryGetter: Getter<MoviesRepository>,
  ) {
    super(Director, dataSource);
    this.directorMovies = this.createHasManyRepositoryFactoryFor('directorMovies', moviesRepositoryGetter,);
    this.registerInclusionResolver('directorMovies', this.directorMovies.inclusionResolver);
  }
}
