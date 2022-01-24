import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Movies, MoviesRelations, Actor, Director, Genre, Through} from '../models';
import {ActorRepository} from './actor.repository';
import {DirectorRepository} from './director.repository';
import {ThroughRepository} from './through.repository';
import {GenreRepository} from './genre.repository';

export class MoviesRepository extends DefaultCrudRepository<
  Movies,
  typeof Movies.prototype.id,
  MoviesRelations
> {

  public readonly moviesActor: BelongsToAccessor<Actor, typeof Movies.prototype.id>;

  public readonly moviesDirector: BelongsToAccessor<Director, typeof Movies.prototype.id>;

  public readonly moviesGenre: HasManyThroughRepositoryFactory<Genre, typeof Genre.prototype.id,
          Through,
          typeof Movies.prototype.id
        >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ActorRepository') protected actorRepositoryGetter: Getter<ActorRepository>, @repository.getter('DirectorRepository') protected directorRepositoryGetter: Getter<DirectorRepository>, @repository.getter('ThroughRepository') protected throughRepositoryGetter: Getter<ThroughRepository>, @repository.getter('GenreRepository') protected genreRepositoryGetter: Getter<GenreRepository>,
  ) {
    super(Movies, dataSource);
    this.moviesGenre = this.createHasManyThroughRepositoryFactoryFor('moviesGenre', genreRepositoryGetter, throughRepositoryGetter,);
    this.registerInclusionResolver('moviesGenre', this.moviesGenre.inclusionResolver);
    this.moviesDirector = this.createBelongsToAccessorFor('moviesDirector', directorRepositoryGetter,);
    this.registerInclusionResolver('moviesDirector', this.moviesDirector.inclusionResolver);
    this.moviesActor = this.createBelongsToAccessorFor('moviesActor', actorRepositoryGetter,);
    this.registerInclusionResolver('moviesActor', this.moviesActor.inclusionResolver);
  }
}
