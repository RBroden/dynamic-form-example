import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit
} from '@angular/core';
import {
    FormGroup,
    FormControl,
    Validators
} from '@angular/forms';
import { Observable } from 'rxjs';

import { Item } from './shared/models/item';

import { forbiddenNameValidator } from './shared/validators/forbidden-name.directive';

@Component({
    selector: 'form-wrapper',
    template: `
    <form (ngSubmit)="handleSubmit()" [formGroup]="form" novalidate>
    <md-tab-group>
        <md-tab label="Tab 1">
            <form-top [form]="form"></form-top>
        </md-tab>
        <md-tab label="Tab 2">
            <form-middle [data]="data" [form]="form"></form-middle>
        </md-tab>
    </md-tab-group>
    <button color="primary" md-raised-button>Submit</button>
    </form>
    
    `
})
export class FormWrapperComponent implements OnInit {

    @Input() data: Item[];
    @Output() onSubmit = new EventEmitter<FormGroup>();
    form: FormGroup;

    constructor() {

    }

    ngOnInit() {
        this.form = new FormGroup({
            first: new FormControl('hi', Validators.required),
            second: new FormControl('', forbiddenNameValidator(/bob/i)),
            filter: new FormControl()
        });
    }

    handleSubmit() {
        this.onSubmit.emit(this.form);
    }
}
