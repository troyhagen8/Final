import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'createmovie',
    templateUrl: './createmovie.component.html'
})
export class CreateMovieComponent {
    public movie: Movie;

    constructor() {}

    //create(http: Http, @Inject('BASE_URL') baseUrl: string) {
    //    http.post(baseUrl + 'api/Movies', this.movie);
    //}
}
interface Movie {
    id: number;
    title: string;
    releaseDate: number;
    genre: string;
    price: number;
    rating: string;
}
