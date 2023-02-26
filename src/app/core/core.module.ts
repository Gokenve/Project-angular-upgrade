import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';


import { HeaderComponent } from './components/header/header.component';
import { NavHeaderComponent } from './components/header/nav-header/nav-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavlinkComponent } from './components/header/nav-header/navlink/navlink.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavHeaderComponent,
    FooterComponent,
    NavlinkComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
