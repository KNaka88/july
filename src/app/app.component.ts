import { Component, OnInit, NgModule, ElementRef } from '@angular/core';
import { MdlUppgradeElementDirective } from './mdl-uppgrade-element.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    private today: number;

    constructor() {}

    ngOnInit() {
        // Set currrent date
        this.today = Date.now();
    }

}
