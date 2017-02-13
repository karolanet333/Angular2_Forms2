import { Component, Input, forwardRef  } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'counter-input',
  template: `
    <button (click)="increment()">+</button>
    {{counterValue}}
    <button (click)="decrement()">-</button>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> CounterInputComponent),
      multi: true
    }
  ]
})
export class CounterInputComponent implements ControlValueAccessor {

  @Input() counterValue = 0;

  increment() {
    this.counterValue++;
    this.propagateChange(this.counterValue);
  }

  decrement() {
    this.counterValue--;
    this.propagateChange(this.counterValue);
  }

  propagateChange = (_: any) => {};

  //MODEL -> VIEW
  writeValue(value: any){
    if (value !== undefined) {
      this.counterValue = value;
    }
  }

  //VIEW -> ModelMethod
  registerOnChange(fn: any){
    this.propagateChange = fn;
  }

  //VIEW -> ModelMethod (para celus)
  registerOnTouched(fn: any){

  }
}