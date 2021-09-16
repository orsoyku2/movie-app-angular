
import { Movie } from './movie';

export class MovieRepository {
  private movies: Movie[];

  constructor() {
    this.movies = [
      {
        id: 1,
        title: 'film1',
        description: 'description1',
        imageUrl: '1.jpeg',
        isPopuler: true
      },
      {
        id: 2,
        title: 'film2',
        description: 'description2',
        imageUrl: '2.jpeg',
        isPopuler: false
      },
      {
        id: 3,
        title: 'film3',
        description: 'description3',
        imageUrl: '3.jpeg',
        isPopuler: true
      },
      {
        id: 4,
        title: 'film4',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like',
        imageUrl: '4.jpeg',
        isPopuler: true
      },
    ];
  }
  getMovies(): Movie[] {
    return this.movies;
  }
  getMoviesById(id:any): Movie {
      return this.movies.find(i => i.id == id)
  }
  getPopulerMovies():Movie[]{
    return this.movies.filter(i => i.isPopuler)
  }
}
