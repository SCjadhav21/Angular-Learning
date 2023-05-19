import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  data: Array<string> = ['Home', 'login', 'signup', 'about'];
  getData(): Array<string> {
    return this.data;
  }
}
