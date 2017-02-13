import {Component} from '@angular/core'
import {Contact} from './contact'

declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'contact-form',
    templateUrl: 'contact-form.component.html'
})
export class ContactFormComponent{
    model = new Contact("Caro", "F", "3883-4994", new Date(2008, 7, 20))

    constructor(){

        setTimeout(()=>{
            $('.datepicker').datepicker({
                format: 'dd/mm/yyyy'
            });

        });

    }

    active = true;
    submitted = false;

    onSubmit(){
        this.submitted = true;
    }

    newModel(){
        this.model = new Contact("", "", "", new Date());

        this.active = false;
        this.submitted = false;
        setTimeout(()=>this.active = true, 0);
    }
}