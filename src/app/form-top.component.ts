import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {MdInputModule} from '@angular/material';

@Component({
    selector: 'form-top',
    template: `
    <div [formGroup]="form">
    <md-input-container class="example-full-width">
    <input formControlName="first" mdInput placeholder="Company">
    </md-input-container>
    </div>
    `
})
export class FormTopComponent {
    @Input() form: FormGroup;

    constructor(){
    }
}
