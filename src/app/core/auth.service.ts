import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl: string;

  constructor(private router: Router) { }

  login(credentials) {
    localStorage.setItem('pl_session', 'ecxuvw');
    if (this.redirectUrl !== null) {
      this.router.navigateByUrl(this.redirectUrl);
    } else {
      this.router.navigate(['/']);
    }
  }

  logout() {
    localStorage.setItem('pl_session', null);
    this.router.navigate(['/login']);
  }

  checkLogin() {
    if (localStorage.getItem('pl_session') !== null) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;

  }
}
