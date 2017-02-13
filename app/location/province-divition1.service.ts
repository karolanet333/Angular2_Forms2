import {ProvinceDivition1} from './province-divition1'

export class ProvinceDivition1Service{
    getProvinceDivitions1() : ProvinceDivition1[]{
        return [
            new ProvinceDivition1(1, "Avellaneda"),
            new ProvinceDivition1(2, "Lanus"),
            new ProvinceDivition1(3, "Lomas de Zamora"),
            new ProvinceDivition1(4, "Monte Grande")
        ];
    }
}