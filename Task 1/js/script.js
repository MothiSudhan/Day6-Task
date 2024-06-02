//a.Constructor for the class Movie
class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  static getPG(movies) {
    const result = movies.filter((item) => item.rating === "PG");
    result.forEach((item) => {
      console.log(item.title);
    });
  }
}
const viduthalai = new Movie("Viduthalai", "RS entertainment", "A");
const premalu = new Movie("Premalu", "Ettan Productions", "PG");
const jamesBond = new Movie("Casino Royale", "Eon Productions", "PG");
const PS1=new Movie("Ponniyan Selvan","Lyka Production","U")
const movies = [viduthalai, jamesBond, premalu];
Movie.getPG(movies);
