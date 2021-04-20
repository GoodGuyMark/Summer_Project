import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
    AuthenticationService,
    TokenPayload
} from "../services/authentication.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-update-profile",
    templateUrl: "./update-profile.component.html"
})
export class UpdateProfileComponent implements OnInit {
    details: TokenPayload;
    constructor(
        private http: HttpClient,
        private auth: AuthenticationService,
        private router: Router
    ) {}

    ngOnInit() {
        this.auth.profile().subscribe(
            user => {
                this.details = user;
            },
            err => {
                console.error(err);
            }
        );
    }

    updateProfile(details: TokenPayload) {
        this.http
            .put(`users/updateProfile/${details.id}`, details)
            .subscribe(() => {
                this.router.navigateByUrl("/profile");
            });
    }
}
