import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserJwtControllerService } from '../rest-api';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl: string;
  loginError = new Subject<string>();

  constructor(private router: Router, private userJwtService: UserJwtControllerService) { }

  login(credentials) {
    this.userJwtService.authorizeUsingPOST({ username: credentials.userName, password: credentials.password })
      .subscribe((token) => {
        this.setLoginAndRedirect(token.id_token);
        return true;
      }, (error) => {
        this.loginError.next(error.message);
      });
  }

  getLoginError(): Subject<string> {
    return this.loginError;
  }

  setLoginAndRedirect(token: string) {
    localStorage.setItem('ID_TOKEN', token);
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
    if (localStorage.getItem('ID_TOKEN') !== null) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;

  }
}
