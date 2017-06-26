import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { tabOptions } from './shared/constants';
import { Data } from './shared/data';

@Component({
    selector: 'form-page',
    template: `
     <h2>Form Page</h2>
     <button (click)="show1()" type="button">Show One</button>
     <button (click)="show2()" type="button">Show Two</button>
     <form-wrapper [data]="data" [show]="showWhich$ | async">
     </form-wrapper>
    `
})
export class FormPageComponent {
    showWhich$ = new BehaviorSubject<string>(tabOptions.one);
    data = Data;

    constructor(){
        console.log(this.data);
    }

    show1() {
        this.showWhich$.next(tabOptions.one);
    }

    show2() {
        this.showWhich$.next(tabOptions.two);
    }
}

