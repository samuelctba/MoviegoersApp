import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MoviesApiTmdb } from '../../providers/movies-api-tmdb';


/*
  Generated class for the MovieDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
  providers:[MoviesApiTmdb]
})

export class MovieDetailsPage {

  selectedMovie: any;
  movieDetail: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,private _moviesApiTmdb: MoviesApiTmdb) {

    this.selectedMovie = navParams.get('moviePicked');
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad MovieDetailsPage!');
    //console.log(this.selectedMovie);
  }

   ngOnInit() {
          this._moviesApiTmdb.singleMovie(this.selectedMovie.id).subscribe(movieSelectedSubs => {
          this.movieDetail = movieSelectedSubs;
          console.log('movieDetail= ');
          console.log(this.movieDetail);
          })
         }
  }


