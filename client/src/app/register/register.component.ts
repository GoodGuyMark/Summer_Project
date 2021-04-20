import { Component } from "@angular/core";
import {
    AuthenticationService,
    TokenPayload
} from "../services/authentication.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: "./register.component.html"
})
export class RegisterComponent {
    credentials: TokenPayload = {
        id: 0,
        username: "",
        first_name: "",
        last_name: "",
        password: "",
        position: "User"
    };

    constructor(private auth: AuthenticationService, private router: Router) {}

    register() {
        this.auth.register(this.credentials).subscribe(
            () => {
                this.router.navigateByUrl("/profile");
            },
            err => {
                console.error(err);
            }
        );
    }
}
