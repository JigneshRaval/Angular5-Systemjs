import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import "rxjs/Rx";

@Component({
    selector: 'list-view-component',
    template: `
        <ul>
            <li *ngFor="let country of countries; let i = index;">{{country.name}} = {{country.code}}</li>
        </ul>
    `
})
export class ListViewComponent {
    private countryApiUrl = '../../../assets/data/country.json';
    private countries = [];
    constructor(private http: Http) { }

    getCountries() {

        return this.http.get('./country.json')
            .toPromise()
            .then(res => <any[]>res.json().data)
            .then(data => {
                console.log('Data :', data);
                return data;
            });


        /*
        return this.http.get(this.countryApiUrl)
            .map((response: Response) => {
                return response.json();
            })
            .catch();
            */
    }

    ngAfterViewInit() {
        this.getCountries().subscribe(data => {
            // Read the user infos  from the JSON response
            this.countries = data['data'];
            console.log(data);
        });

        console.log(this.countries);
    }
}
