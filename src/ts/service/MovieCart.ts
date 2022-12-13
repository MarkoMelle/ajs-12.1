import Movie from '../domain/Movie'

export default class MovieCart {
  private readonly movies: Movie[] = []

  add (item: Movie): void {
    this.movies.push(item)
  }

  get items (): Movie[] {
    return [...this.movies]
  }
}
