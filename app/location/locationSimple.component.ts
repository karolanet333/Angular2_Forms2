import {Component} from '@angular/core'
import {Country} from './country'
import {CountryService} from './country.service'

@Component({
    moduleId: module.id,
    selector: 'location-simple',
    templateUrl: './location.component.html',
    providers:[
        CountryService
    ]
})
export class LocationComponent {

    location: {
        id: number,
        description: string
    };

    countries: Country[];

    constructor(
        private countryService: CountryService
    ){
        this.countries = countryService.getCountries();

        this.location = {
            id: 1,
            description: 'Argentina'
        }
    }

    countryChange( id: any){
        console.log(this.location.id);
        console.log(this.location.description);
        console.log(id);
    }


}