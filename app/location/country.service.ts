import {Country} from './country'

export class CountryService{
    getCountries(): Country[]{
        return [
            new Country(1, "Argentina"),
            new Country(2, "Brasil"),
            new Country(3, "Chile"),
            new Country(4, "EEUU")    
        ];
    }
}