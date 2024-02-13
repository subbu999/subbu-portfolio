import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('html-width', [
      state('hidden', style({ width: 0 })),
      state('visible', style({ width: '75%', transform: 'none' })),
      transition('hidden => visible', animate('1s ease-in-out')),
    ]),
    trigger('css-width', [
      state('hidden', style({ width: 0 })),
      state('visible', style({ width: '80%', transform: 'none' })),
      transition('hidden => visible', animate('1s ease-in-out')),
    ]),
    trigger('js-width', [
      state('hidden', style({ width: 0 })),
      state('visible', style({ width: '72%', transform: 'none' })),
      transition('hidden => visible', animate('1s ease-in-out')),
    ]),
    trigger('bs-width', [
      state('hidden', style({ width: 0 })),
      state('visible', style({ width: '78%', transform: 'none' })),
      transition('hidden => visible', animate('1s ease-in-out')),
    ]),
    trigger('ng-width', [
      state('hidden', style({ width: 0 })),
      state('visible', style({ width: '70%', transform: 'none' })),
      transition('hidden => visible', animate('1s ease-in-out')),
    ]),
    trigger('node-width', [
      state('hidden', style({ width: 0 })),
      state('visible', style({ width: '50%', transform: 'none' })),
      transition('hidden => visible', animate('1s ease-in-out')),
    ]),
  ],
})
export class AboutComponent implements OnInit {
  htmlRevealState = 'hidden';
  cssRevealState = 'hidden';
  jsRevealState = 'hidden';
  bsRevealState = 'hidden';
  ngRevealState = 'hidden';
  nodeRevealState = 'hidden';
  constructor() {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yOffset = window.scrollY;

    if (yOffset > 250) {
      this.htmlRevealState = 'visible';
    }
    if (yOffset > 300) {
      this.cssRevealState = 'visible';
    }
    if (yOffset > 350) {
      this.jsRevealState = 'visible';
    }
    if (yOffset > 400) {
      this.bsRevealState = 'visible';
    }
    if (yOffset > 450) {
      this.ngRevealState = 'visible';
    }
    if (yOffset > 500) {
      this.nodeRevealState = 'visible';
    }
  }
  ngOnInit(): void {}
}
