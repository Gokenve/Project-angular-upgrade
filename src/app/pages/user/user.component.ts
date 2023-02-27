import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {


  constructor(private router: Router ) {}
  
  navigateToCreateMovie() {
    this.router.navigate(['edit-movie']);
  }

}
