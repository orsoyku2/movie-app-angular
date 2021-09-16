import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie';

@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

  transform(value: Movie[], searchedWord:string): Movie[] {
    if(searchedWord == null) {
      return value;
    }
    else{
      return value.filter(movie => movie.title.toLowerCase().includes(searchedWord.toLowerCase()))
    }
  }

}

