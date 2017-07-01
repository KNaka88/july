import { Component, OnInit, NgModule, ElementRef } from '@angular/core';
import { MdlUppgradeElementDirective } from './mdl-uppgrade-element.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    private today: number;
    private mainVideo: string = "../../assets/video/demo.mp4";

    constructor(private elementRef: ElementRef) {}

    ngOnInit() {
        // Set currrent date
        this.today = Date.now();

        // Autoplay Video
        this.startVideo();
    }


    startVideo() {
        let video = this.elementRef.nativeElement.querySelector('video');
        video.addEventListener( "canplay", () => {
            video.play();
        });
    }

}
