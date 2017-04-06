import { Injectable } from '@angular/core';
import { Http , Jsonp, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoviesApiTmdb provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MoviesApiTmdb {

  API_KEY : string = '1f54bd990f1cdfb230adb312546d765d';
  BASE_URL : string = "https://api.themoviedb.org/3/movie/";
  GENRE_URL : string = "https://api.themoviedb.org/3/genre/movie/list";
  FINAL_URL : string ;
  GENERAL_FEATURES : string = 'upcoming';
  page : number = 1;

      static get parameters() {
        return [[Http]];
    }

  constructor(private http:Http, private jsonp: Jsonp) {
    console.log('Hello MoviesApiTmdb Provider construction called!');
  }

      searchMovies(movieName) {
        var url = 'http://api.themoviedb.org/3/search/movie?query=&query=' + encodeURI(movieName) + '?api_key=' + this.API_KEY;
        var response = this.http.get(url).map(res => res.json());
		return response;
    }

      request() {

/*  //add any extra params added
    if ( extraParams ) {
      extraParams.forEach(function(param){
        //make sure the param has key and value properties
        if(param.key && param.value){
          FINAL_URL += '&'+param.key+'='+param.value ;
        }
      });
    }*/

          this.FINAL_URL = this.BASE_URL + this.GENERAL_FEATURES + '?api_key=' + this.API_KEY + '&page=' + this.page;
          
/*        let url: string,
            type: any,
            body: any,
            api_key: string = '1f54bd990f1cdfb230adb312546d765d';*/

        // Set the right url using the provided name
/*        switch (name) {

            case 'getMovies':
                url = 'http://api.themoviedb.org/3/movie/'+id+'?api_key=' + api_key;
                type = RequestMethod.Get;
                break;

            case 'getMoviesByPage':
                url = 'http://api.themoviedb.org/3/movie/popular?api_key='+api_key+'&page=' + id;
                type = RequestMethod.Get;
                break;

            case 'getSingleMovie':
                url = 'https://api.themoviedb.org/3/movie/'+id+'?api_key=' + api_key;
                type = RequestMethod.Get;
                break;

            case 'getVideo':
                url = 'https://api.themoviedb.org/3/movie/'+id+'/videos?api_key=' + api_key;
                type = RequestMethod.Get;
                break;

            case 'getImages':
                url = 'https://api.themoviedb.org/3/movie/'+id+'/images?api_key=' + api_key;
                type = RequestMethod.Get;
                break;
        }*/

        // Define request parameters
/*        let options = {
            method: type,
            url: url,
            body: null
        };*/

        // If the passed item is a string use it
        // Otherwise json stringify it
/*        if (item) {
            body = typeof item === 'string' ? item : JSON.stringify(item);
            options.body = body;
        }*/

        // If authHeader is true we need to append the token to the header
        //if (authHeader) options.headers.append('Authorization', 'Basic a3Jlc29nYWxpYzg6WmlkYW5lNTU1');

/*        return this.http.request(new Request(options))
            .map(res => res.json())

            .catch(error => {
                return Observable.throw(error);
            });*/

        return this.http.get(this.FINAL_URL)
            .map(res => res.json());


    }

    getMoviesByPage(page){
      let params = new URLSearchParams();
      params.set('api_key', this.API_KEY);
      params.set('language', 'en-US');
      params.set('page', page);
      //params.set('callback', 'JSONP_CALLBACK');
      //https://api.themoviedb.org/3/movie/upcoming?api_key=1f54bd990f1cdfb230adb312546d765d&language=en-US&page=1
      //return this.jsonp.get(this.BASE_URL + "" + feature, { search: params });
      return this.http.get(this.BASE_URL + this.GENERAL_FEATURES , { search: params })
          .map(res => res.json());
    }

    singleMovie(movieId){
        let params = new URLSearchParams();
        params.set('api_key', this.API_KEY);
        params.set('language', 'en-US');
        return this.http.get(this.BASE_URL + movieId, { search: params })
            .map(res => res.json());
    }

    singleMovieVideo(movieId){
        let params = new URLSearchParams();
        params.set('api_key', this.API_KEY);
        params.set('language', 'en-US');
        return this.http.get(this.BASE_URL + movieId + '/videos', { search: params })
            .map(res => res.json());
    }      

    singleMovieImages(movieId){
        let params = new URLSearchParams();
        params.set('api_key', this.API_KEY);
        params.set('language', 'en-US');
        return this.http.get(this.BASE_URL + movieId + '/images', { search: params })
            .map(res => res.json());
    }

    moviesGenres(){
        let params = new URLSearchParams();
        params.set('api_key', this.API_KEY);
        params.set('language', 'en-US');
        return this.http.get(this.GENRE_URL, { search: params })
            .map(res => res.json());
    }


/*    genre
    https://api.themoviedb.org/3/genre/movie/list?api_key=1f54bd990f1cdfb230adb312546d765d&language=en-US

An example API query to filter TV show by genre looks like (replace ### with your API key):

http://api.themoviedb.org/3/discover/tv?api_key=###&sort_by=popularity.desc&with_genres=18
You can filter by a specific keyword I'll use id 9882 "space" as an example:

http://api.themoviedb.org/3/discover/tv?api_key=###&sort_by=popularity.desc&with_keywords=9882
All of the available filters and options for discover can be found here.

I have an open ticket for filtering by country here.*/


/*      return this.http.get(this.BASE_URL + "" + movieId, { search: params })
        .map(res => {
        console.log(res.json());
        res.json()});*/
/*      return this.jsonp.get(this.BASE_URL + "" + movieId, { search: params })
      .map(res => res.json())*/;
}

