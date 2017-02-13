import {Component} from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'contact-form3',
    templateUrl: 'contact-form3.component.html'
})
export class ContactForm3Component{
    name: string="Caro";
    surname: string="Perez";
    age: number = 37;

    logForm(value: any){
        console.log(value);
    }
}