import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
    public movies: Movie[];
    public moviesBak: Movie[];
    public searchTerm: string;

    constructor(public http: Http, @Inject('BASE_URL') public baseUrl: string) {
        http.get(baseUrl + 'api/Movies').subscribe(result => {
            this.movies = result.json() as Movie[];
            this.moviesBak = this.movies;
        }, error => console.error(error));
    }

    filter() {
        this.movies = this.moviesBak;

        if (this.searchTerm ===""){
            //Do nothing 
        } else {
            this.movies = this.movies.filter(m => m.title.includes(this.searchTerm) || m.genre.includes(this.searchTerm));
        }
    }
}
interface Movie {
    id: number;
    title: string;
    releaseDate: number;
    genre: string;
    price: number;
    rating: string;
}
