import {Component, Input, forwardRef} from '@angular/core'
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'

@Component({
    selector: 'address-input',
    template: `
        <form #addressForm = "ngForm">
            Calle: <input type="text" name="calle" [(ngModel)] = "address.street">
            Numero: <input type="number" name="numero" [(ngModel)] = "address.number">
            CP: <input type="text" name="cp" [(ngModel)] = "address.postalCode">
            <button (click)="clearAddress()">Clear Address</button>
        </form>
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(()=> AddressInputComponent),
            multi: true
        }
    ]
})
export class AddressInputComponent implements ControlValueAccessor{

    @Input() address: {
        street: string,
        number: number,
        postalCode: string
    };

    constructor(){
        this.newAddress();
    }

    propagateChange = (_:any) => {};

    newAddress(){
        this.address = {
            street: "",
            number: null,
            postalCode: ""
        };
    }

    clearAddress(){
        this.newAddress();
        this.propagateChange(this.address);
    }

    writeValue(value: any){
        if (value != undefined){
            this.address = value;
        }
    }

    registerOnChange(fn: any){
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any){

    }

}