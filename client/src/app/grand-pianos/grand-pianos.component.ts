import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PianoDetails } from "../services/authentication.service";

@Component({
    selector: "app-grand-pianos",
    templateUrl: "./grand-pianos.component.html"
})
export class GrandPianosComponent implements OnInit {
    pianos: PianoDetails;
    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.getGrandPianos();
    }

    getGrandPianos() {
        this.http.get<any>("/pianos/getGrandPianos").subscribe(
            details => {
                this.pianos = details;
            },
            err => {
                console.error(err);
            }
        );
    }
}
