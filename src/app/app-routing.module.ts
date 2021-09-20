import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {path:'movies',component:MoviesComponent},
  {path:'movies/category/:id',component:MoviesComponent},
  {path:'movies/:id',component:MovieDetailsComponent},
  {path:'',redirectTo:'movies',pathMatch: 'full'}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }