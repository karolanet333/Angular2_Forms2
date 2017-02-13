import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <!--<contact-form></contact-form>-->
      <!--<contact-form3></contact-form3>-->
      <!--<form #form="ngForm">
        <counter-input2 name="counter" ></counter-input2>
      </form>

      <pre>{{ form.value | json }}</pre>

      <form #form="ngForm">
        <address-input name="address" [(ngModel)]="address" ></address-input>

      </form>

      <pre>
        {{form.value | json}}
      </pre>
      -->

      <div class="container">
        <div style="width: 300px; margin-top: 20px;">
          <form>
            
          </form>
        </div>
      </div>
  `
})
export class AppComponent {

    name="Carlos";
    surname="Juarez";
    address={
      street: "Calle Falsa",
      number: 123,
      postalCode: "AB0321"
    }

    countryId = 1;
    provinceId = 1;

    contact = {
      name: "Carlos",
      surname: "Juarez",
      address: {
        street: "Calle Falsa",
        number: 123,
        postalCode: "AB0321"
      },
      location: {
        countryId: 1,
        provinceId: 1,
        provinceDivition1: 1,
        provinceDivition2: 1
      }
    }
 }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/