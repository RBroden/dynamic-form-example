import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { tabOptions } from './shared/constants';
import { Data } from './shared/data';

@Component({
    selector: 'form-page',
    template: `
     <h2>Form Page</h2>
     <form-wrapper [data]="data" (onSubmit)="handleSubmit($event)">
     </form-wrapper>
    `
})
export class FormPageComponent {
    data = Data;

    constructor() {
    }

    handleSubmit(form: FormGroup): void {
        console.log('form', form.value);
    }
}

