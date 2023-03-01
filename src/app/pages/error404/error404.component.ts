import { Event,NavigationStart, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component {

  public currentRoute!: string;
  public buttonType: string = '';

  constructor(private router: Router) {}

  public goBack() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.currentRoute = event.url
      }
    })
  }

}
