import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class AuthGuardAdminService implements CanActivate {
    constructor(private auth: AuthenticationService, private router: Router) {}

    canActivate() {
        if (!this.auth.isAdmin()) {
            this.router.navigateByUrl("/");
            return false;
        }
        return true;
    }
}
