import { Component } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";
import { TokenPayload } from "../services/authentication.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: "./login.component.html"
})
export class LoginComponent {
    credentials: TokenPayload = {
        id: 0,
        username: "",
        first_name: "",
        last_name: "",
        password: "",
        position: "User"
    };

    constructor(private auth: AuthenticationService, private router: Router) {}

    login() {
        this.auth.login(this.credentials).subscribe(
            () => {
                this.router.navigateByUrl("/profile");
            },
            err => {
                console.log(this.credentials);
                console.error(err);
            }
        );
    }
}
