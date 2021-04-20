import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "./services/authentication.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html"
})
export class AppComponent {
    constructor(public auth: AuthenticationService) {}

    ngOnInit() {
        this.home();
    }

    home() {
        document.getElementById("home").removeAttribute("class");
        document
            .getElementById("home")
            .setAttribute("class", "nav-link active");
        document.getElementById("shop").removeAttribute("class");
        document
            .getElementById("shop")
            .setAttribute("class", "nav-link text-light");
        document.getElementById("learn").removeAttribute("class");
        document
            .getElementById("learn")
            .setAttribute("class", "nav-link text-light");
        document.getElementById("contact").removeAttribute("class");
        document
            .getElementById("contact")
            .setAttribute("class", "nav-link text-light");
    }

    shop() {
        document.getElementById("home").removeAttribute("class");
        document
            .getElementById("home")
            .setAttribute("class", "nav-link text-light");
        document.getElementById("shop").removeAttribute("class");
        document
            .getElementById("shop")
            .setAttribute("class", "nav-link active");
        document.getElementById("learn").removeAttribute("class");
        document
            .getElementById("learn")
            .setAttribute("class", "nav-link text-light");
        document.getElementById("contact").removeAttribute("class");
        document
            .getElementById("contact")
            .setAttribute("class", "nav-link text-light");
    }

    learn() {
        document.getElementById("home").removeAttribute("class");
        document
            .getElementById("home")
            .setAttribute("class", "nav-link text-light");
        document.getElementById("shop").removeAttribute("class");
        document
            .getElementById("shop")
            .setAttribute("class", "nav-link text-light");
        document.getElementById("learn").removeAttribute("class");
        document
            .getElementById("learn")
            .setAttribute("class", "nav-link active");
        document.getElementById("contact").removeAttribute("class");
        document
            .getElementById("contact")
            .setAttribute("class", "nav-link text-light");
    }

    contact() {
        document.getElementById("home").removeAttribute("class");
        document
            .getElementById("home")
            .setAttribute("class", "nav-link text-light");
        document.getElementById("shop").removeAttribute("class");
        document
            .getElementById("shop")
            .setAttribute("class", "nav-link text-light");
        document.getElementById("learn").removeAttribute("class");
        document
            .getElementById("learn")
            .setAttribute("class", "nav-link text-light");
        document.getElementById("contact").removeAttribute("class");
        document
            .getElementById("contact")
            .setAttribute("class", "nav-link active");
    }

    admin() {
        document.getElementById("tabs").setAttribute("hidden", "true");
    }

    returnHome() {
        document.getElementById("tabs").removeAttribute("hidden");
        this.home();
    }

    register() {
        document.getElementById("tabs").setAttribute("hidden", "true");
    }

    profile() {
        document.getElementById("tabs").setAttribute("hidden", "true");
    }

    login() {
        document.getElementById("tabs").setAttribute("hidden", "true");
    }
}
