import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Genre, GenreRelations, Movies, Through} from '../models';
import {ThroughRepository} from './through.repository';
import {MoviesRepository} from './movies.repository';

export class GenreRepository extends DefaultCrudRepository<
  Genre,
  typeof Genre.prototype.id,
  GenreRelations
> {

  public readonly genreMovies: HasManyThroughRepositoryFactory<Movies, typeof Movies.prototype.id,
          Through,
          typeof Genre.prototype.id
        >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ThroughRepository') protected throughRepositoryGetter: Getter<ThroughRepository>, @repository.getter('MoviesRepository') protected moviesRepositoryGetter: Getter<MoviesRepository>,
  ) {
    super(Genre, dataSource);
    this.genreMovies = this.createHasManyThroughRepositoryFactoryFor('genreMovies', moviesRepositoryGetter, throughRepositoryGetter,);
    this.registerInclusionResolver('genreMovies', this.genreMovies.inclusionResolver);
  }
}
