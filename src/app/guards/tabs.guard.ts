import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CapacitorBase } from '../lib/CapacitorBase';

@Injectable({
    providedIn: 'root'
})
export class TabsGuard extends CapacitorBase implements CanActivate {
    constructor(private router: Router) {
      super();
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
      if (this.mobile && state.url.includes('tabs')) {
        return true
      } else if (this.mobile) {
        this.router.navigateByUrl('/tabs/' + route.url.toString().replaceAll(',', '/'))
        return true
      } else if (!this.mobile && state.url.includes('tabs')) {
        this.router.navigateByUrl(state.url.replace('/tabs', ''))
        return true
      } else {
        return true
      }
    }

}
