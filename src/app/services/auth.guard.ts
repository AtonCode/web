import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MicroServicioPanteraService } from './micro-servicio-pantera.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  microServicioPanteraService: MicroServicioPanteraService | undefined;

  constructor(_microServicioPanteraService: MicroServicioPanteraService) {
    this.microServicioPanteraService = _microServicioPanteraService;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (this.microServicioPanteraService?.validarToken() == true) {
      return true;
    }

    return false;
  }
  
}
