export default class Movie {
  constructor (
    readonly name: string,
    readonly year: number,
    readonly country: string,
    readonly slogan: string,
    readonly genre: string[],
    readonly duration
  ) {}
}
