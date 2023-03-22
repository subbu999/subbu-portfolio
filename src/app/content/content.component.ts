import { Component, OnInit, Query } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { trigger, transition } from '@angular/animations'
import { slideLeft, slideRight } from '../route-animations';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('HomePage => *', slideRight),
      transition('ContactPage => *', slideLeft),
      transition('AboutPage => HomePage', slideLeft),
      transition('AboutPage => PortfolioPage', slideRight),
      transition('AboutPage => ContactPage', slideRight),
      transition('AboutPage => BlogPage', slideRight),
      transition('PortfolioPage => BlogPage', slideRight),
      transition('PortfolioPage => ContactPage', slideRight),
      transition('BlogPage => ContactPage', slideRight),
      transition('BlogPage => PortfolioPage', slideLeft),
      transition('BlogPage => AboutPage', slideLeft),
      transition('BlogPage => HomePage', slideLeft),
      transition('PortfolioPage => AboutPage', slideLeft),
      transition('PortfolioPage => HomePage', slideLeft),

    ])
  ]
})
export class ContentComponent implements OnInit {

  constructor(private contexts: ChildrenOutletContexts) { }

  ngOnInit(): void {
  }
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

}
