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
    <input formControlName="second" mdInput placeholder="Something Else" forbiddenName="bob" readonly>
    </md-input-container>
    <div [hidden]="!show">
        <input formControlName="filter" (keyup)="handleSearch($event)" type="search">
        <ul>
          <li *ngFor="let item of filteredData" (click)="handleClickItem(item)">{{ item.name }}</li>
        </ul>
    </div>
    </div>
    {{ data | json }}
    <p>----------------------</p>
    {{ filteredData | json }}
    `
})
export class FormMiddleComponent {
    @Input() form: FormGroup;
    @Input() data: Item[];

    filteredData: Item[];
    show: boolean;

    constructor() {
    }

    handleSearch(event: any): void {
        if (!!event.target.value) {
            this.filteredData = this.data.filter( (item) => {
                return item.name.includes(event.target.value);
            });
        } else {
            this.filteredData = [];
        }
    }

    handleClickItem(item: Item): void {
        this.form.controls['second'].setValue(item.name);
    }
}
