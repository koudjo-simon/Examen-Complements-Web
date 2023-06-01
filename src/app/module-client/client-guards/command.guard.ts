import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommandService } from 'src/app/services/command.service';

@Injectable({
  providedIn: 'root'
})
export class CommandGuard implements CanActivate {

  constructor(private cmdService: CommandService,
    private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let commandPassed: boolean = this.cmdService.isCommandPassed();
      if (commandPassed == false) {
        this.router.navigateByUrl("/client/food");
        return false;
      }
    return true;
  }
  
}
