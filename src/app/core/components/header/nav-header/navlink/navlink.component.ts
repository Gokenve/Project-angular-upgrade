import { Component, Input } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';


import { INav } from '../../../../services/models/nav.models';

@Component({
  selector: 'app-navlink',
  templateUrl: './navlink.component.html',
  styleUrls: ['./navlink.component.scss']
})

export class NavlinkComponent  {

  @Input() public page!: INav;

  public currentRoute!: string;

  constructor(private router: Router) {}

  public selectedRoute () {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

}
