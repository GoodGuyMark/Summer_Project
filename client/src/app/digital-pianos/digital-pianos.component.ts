import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PianoDetails } from "../services/authentication.service";

@Component({
    selector: "app-digital-pianos",
    templateUrl: "./digital-pianos.component.html"
})
export class DigitalPianosComponent implements OnInit {
    pianos: PianoDetails;
    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.loadDigitalPianos();
    }

    loadDigitalPianos() {
        this.http.get<any>("/pianos/getDigitalPianos").subscribe(
            details => {
                this.pianos = details;
            },
            err => {
                console.error(err);
            }
        );
    }
}
