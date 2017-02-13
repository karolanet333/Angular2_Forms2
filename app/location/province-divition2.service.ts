import {ProvinceDivition2} from './province-divition2'

export class ProvinceDivition2Service{
    getProvinceDivitions2() : ProvinceDivition2[]{
        return [
            new ProvinceDivition2(1, "Gerly (Avellaneda)"),
            new ProvinceDivition2(2, "Gerly (Lanus)"),
            new ProvinceDivition2(3, "Remedios de Escalada"),
            new ProvinceDivition2(4, "Lanus"),
            new ProvinceDivition2(5, "Avellaneda"),
            new ProvinceDivition2(6, "Banfield"),
            new ProvinceDivition2(7, "Lomas de Zamora")
        ];
    }
}