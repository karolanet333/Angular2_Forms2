import {Province} from './province'

export class ProvinceService{

    getProvinces(
        countryId: number 
    ): Province[]{

        var provinces: Province[];

        switch(countryId){
            //argentina
            case 1:
                provinces = [
                    new Province(1, "Buenos Aires"),
                    new Province(2, "Chaco"),
                    new Province(3, "Formosa"),
                    new Province(4, "Cordoba")    
                ];
                break;
            //brasil
            case 2:
                provinces = [
                    new Province(1, "Brasil prov 1"),
                    new Province(2, "Brasil prov 2"),
                    new Province(3, "Brasil prov 3"),
                    new Province(4, "Brasil prov 4")    
                ];
                break;
            //chile
            case 3:
                provinces = [
                    new Province(1, "Chile prov 1"),
                    new Province(2, "Chile prov 2"),
                    new Province(3, "Chile prov 3"),
                    new Province(4, "Chile prov 4")    
                ];
                break;
            //eeuu
            case 4:
                provinces = [
                    new Province(1, "EEUU prov 1"),
                    new Province(2, "EEUU prov 2"),
                    new Province(3, "EEUU prov 3"),
                    new Province(4, "EEUU prov 4")    
                ];
                break;
        }

        return 
    }
}