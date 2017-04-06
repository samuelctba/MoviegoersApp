import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MoviesApiTmdb } from '../../providers/movies-api-tmdb';
import { MovieDetailsPage } from '../movie-details/movie-details';
/*
  Generated class for the MoviesList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-movies-list',
  templateUrl: 'movies-list.html',
  providers: [MoviesApiTmdb]
})
export class MoviesListPage {

  //VARIABLES
  public moviesList: Array<{}> = [];
  public featuresPopUpMenu : any;
  public title: string = 'UpComing';
  public singleMovieArray : Array<{}> = [];
  public allGenres : Array<{}> = [];
  private _page:number=2;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _moviesApiTmdb: MoviesApiTmdb,
    ) {


    }

 ngOnInit() {
        this._moviesApiTmdb.request().subscribe(result => {
            console.log('RESULTADO DA REQUEST');
            console.log(result);
            this.moviesList = result.results.map(resultMovieList => {
                return {
                    id: resultMovieList.id,
                    title: resultMovieList.title,
                    poster: resultMovieList.poster_path,
                    backdrop: resultMovieList.poster_path,
                    genres: resultMovieList.genre_ids,
                    release: resultMovieList.release_date,
                    overview: resultMovieList.overview,
                    rating: resultMovieList.vote_average
                }
            })
            console.log('RESULTADO DA moviesList');
            console.log(this.moviesList);
        });
        
    }

  // Show Movie Details Page
  movieSelected(movie) {
        this.navCtrl.push(MovieDetailsPage, {
           moviePicked: movie
        });
    }

  showMoreMovies() {
        this._moviesApiTmdb.getMoviesByPage(this._page).subscribe(
            res => {
                //console.log(res);
                this._page += 1;
                res.results.forEach(resultMovieList => {
                    this.moviesList.push({
                            id: resultMovieList.id,
                            title: resultMovieList.title,
                            poster: resultMovieList.poster_path,
                            backdrop: resultMovieList.poster_path,
                            genres: resultMovieList.genre_ids,
                            release: resultMovieList.release_date,
                            overview: resultMovieList.overview,
                            rating: resultMovieList.vote_average
                    })
                })
            })
        }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviesListPage!!!');
  }


}
