import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Category } from '../models/category';
import { Movie } from '../models/movie';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from '../services/category.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css'],
  providers:[CategoryService,MovieService]
})
export class MovieCreateComponent implements OnInit {
  
  categories:Category[] = null;
  model:any = {};
  constructor(private categoryService:CategoryService,private movieService:MovieService,private router:Router,private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().pipe(tap(data => console.log(data))).subscribe(data => this.categories = data)
  }
  // createMovie(title:any,description:any,imageUrl:any,categoryId:any){
  //   console.log(title);
  //   console.log(description);
  //   console.log(imageUrl);
  //   console.log(categoryId);
  //   if(title.value === "" || description.value === "" || imageUrl.value === "" || categoryId.value === "-1") {
  //     this.alertify.error("tüm alanları doldurmalısınız");
  //     return;
  //   }

  //   if(title.length < 5) {
  //     this.alertify.error("title için min. 5 karakter girmelisiniz");
  //     return;
  //   }

  //   if(description.length < 10 || description.length > 50) {
  //     this.alertify.error("description için 10-50 karakter aralığında değer girmelisiniz");
  //     return;
  //   }

  //   const extensions = ["jpeg","jpg","png"];
  //   const extension = imageUrl.split('.').pop();

  //   if(extensions.indexOf(extension) === -1) {
  //     this.alertify.error("sadece 'jpeg,'jpg','png' resimleri ekleyebilirsiniz");
  //     return;
  //   }

  //   this.movie = {
  //     id:0,
  //     title: title,
  //     description: description,
  //     imageUrl: imageUrl,
  //     categoryId:categoryId,
  //     isPopuler:false,
  //   }
  //   this.movieService.createMovie(this.movie).subscribe(data => this.router.navigate(["movies", data.id]))

  // }
  movieForm = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    imageUrl: new FormControl(),
    categoryId: new FormControl()
  })
  createMovie(){
    console.log(this.movieForm)
    

  


  }
}
