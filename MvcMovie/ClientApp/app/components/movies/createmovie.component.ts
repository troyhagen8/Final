import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    selector: 'createmovie',
    templateUrl: './createmovie.component.html'
})
export class CreateMovieComponent {
    model = new Movie();
    postResult: Object;

    constructor(public http: Http, @Inject('BASE_URL') public baseUrl: string, public router: Router) { }

    onSubmit() {
        console.log("Submitted: " + this.model.title + " ID: " + this.model.id +
            " Rating: " + this.model.rating + " Year: " + this.model.releaseDate +
            " Genre: " + this.model.genre + " Price: " + this.model.price);
        let hdrs = new Headers({ 'Content-Type': 'application/json' });

        this.http.post(this.baseUrl + 'api/Movies', this.model,
            { headers: hdrs }).subscribe(result => {
                this.postResult = result;
                this.router.navigate(['/movies']);
            });
    }

    
}
class Movie {
    id: number;
    title: string;
    releaseDate: number;
    genre: string;
    price: number;
    rating: string;
}
