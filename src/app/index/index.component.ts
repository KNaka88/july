import { Component, OnInit, NgModule, ElementRef } from '@angular/core';
import { MdlUppgradeElementDirective } from '../mdl-uppgrade-element.directive';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
    private mainVideo: string = "../../assets/video/demo.mp4";

    constructor(private elementRef: ElementRef) {}

    ngOnInit() {
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
