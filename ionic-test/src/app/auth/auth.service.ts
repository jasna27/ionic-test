import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userIsAuthenticated: boolean = false;

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  constructor() {}

  loginUser() {
    this._userIsAuthenticated = true;
  }

  logoutUser() {
    console.log('logout from service');
    this._userIsAuthenticated = false;
  }
}
