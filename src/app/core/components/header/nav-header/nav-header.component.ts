import { Component } from '@angular/core';

import { pagesToSelect } from 'src/app/core/services/data/nav-data/nav.data';



@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent {

  public pagesToSelect = pagesToSelect


}
