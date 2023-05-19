import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GridComponent } from './app.grid.components';
import { GridService } from './grid.servise';
import { NavbarService } from './navbar.service';
import { NavBarComponent } from './app.nav.components';

@NgModule({
  declarations: [AppComponent, GridComponent, NavBarComponent],
  imports: [BrowserModule],
  providers: [GridService, NavbarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
