import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url: string = state.url;
    return this.checkAdmin(url);
  }
  checkAdmin(url: string): true | UrlTree {
    if (this.authService.isAdmin) {return true; }
    this.authService.redirectUrl = url;
    return this.router.parseUrl('/chat');
  }
}
