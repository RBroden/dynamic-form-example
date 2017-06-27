import { Component, Input, ViewChild } from '@angular/core';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Item } from './shared/models/item';

import { forbiddenNameValidator } from './shared/validators/forbidden-name.directive';

@Component({
    selector: 'form-middle',
    template: `
    <div [formGroup]="form">
        <md-input-container class="example-full-width">
            <input formControlName="second" mdInput placeholder="Something Else" forbiddenName="bob">
        </md-input-container>
    </div>
    `
})
export class FormMiddleComponent {
    @Input() form: FormGroup;
    @Input() data: Item[];

    constructor() {
    }
}
