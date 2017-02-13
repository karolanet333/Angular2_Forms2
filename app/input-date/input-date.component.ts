import {Component, forwardRef} from '@angular/core'
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'

declare var $:any;

@Component({
    selector: 'input-date',
    template: `
                <input class="datepicker form-control" data-date-format="dd/mm/yyyy" > <br>
                Date: {{value}}
                `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(()=> InputDateComponent),
            multi: true
        }
    ]
})
export class InputDateComponent implements ControlValueAccessor {

    value: Date;

    propagateChange = (_: any) => {
        
    };
    
    constructor(){

        setTimeout(()=> {
            $('.datepicker').datepicker({
                format: 'dd/mm/yyyy'
            });
            $('.datepicker').datepicker('update', this.value);

            $('.datepicker').datepicker()
            .on('change_date', function(e: any) {
                // `e` here contains the extra attributes
                //setTimeout(()=>{
                    this.value = $('.datepicker').datepicker("getDate");
                //}, 0);
                this.propagateChange(this.value);
            });
        }, 0);
        
    }

    //model to view
    writeValue(value: Date){
        if (value != undefined){
            setTimeout(()=>{
                $('.datepicker').datepicker('update', value);
            }, 0);
            this.value = value;
        }
    }

    //view to model
    registerOnChange(fn: any){
        
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any){

    }
}