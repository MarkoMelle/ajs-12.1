import Movie from './domain/Movie'
import MovieCart from './service/MovieCart'

const movieCart = new MovieCart()
movieCart.add(new Movie('Мстители', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик'], 137))
movieCart.add(new Movie('Мстители 2', 2014, 'США', 'Avengers Assemble!', ['фантастика', 'боевик'], 132))
console.log(movieCart.items)
