import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { tabOptions } from './shared/constants';
import { Item } from './shared/models/item';

import { forbiddenNameValidator } from './shared/validators/forbidden-name.directive';

@Component({
    selector: 'form-wrapper',
    template: `
    {{ show }}
    <div style="border:1px solid #f00;">
    <form (ngSubmit)="onSubmit()" [formGroup]="form" novalidate>
    <div [ngSwitch]="show">
        <form-top *ngSwitchCase="thisTabOptions.one" [form]="form"></form-top>
        <form-middle [data]="data" *ngSwitchCase="thisTabOptions.two" [form]="form"></form-middle>
    </div>
    <button color="primary" md-raised-button>Submit</button>
    </form>
    </div>
    
    `
})
export class FormWrapperComponent implements OnInit {

    @Input() show: string;
    @Input() data: Item[];
    form: FormGroup;
    thisTabOptions = tabOptions;

    constructor() {

    }

    ngOnInit() {
        this.form = new FormGroup({
            first: new FormControl('hi', Validators.required),
            second: new FormControl('', forbiddenNameValidator(/bob/i)),
            filter: new FormControl()
        });
    }

    onSubmit() {
        console.log(this.form.value);
    }
}
