import MovieCart from '../service/MovieCart'
import Movie from '../domain/Movie'

test('MovieCart should add Movie', () => {
  const movieCart = new MovieCart()
  movieCart.add(new Movie('Мстители', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик'], 137))
  movieCart.add(new Movie('Мстители 2', 2014, 'США', 'Avengers Assemble!', ['фантастика', 'боевик'], 132))
  const expected = [
    new Movie('Мстители', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик'], 137),
    new Movie('Мстители 2', 2014, 'США', 'Avengers Assemble!', ['фантастика', 'боевик'], 132)
  ]
  expect(movieCart.items).toEqual(expected)
})
