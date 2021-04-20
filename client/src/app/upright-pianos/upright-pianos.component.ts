import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PianoDetails } from "../services/authentication.service";

@Component({
    selector: "app-upright-pianos",
    templateUrl: "./upright-pianos.component.html"
})
export class UprightPianosComponent implements OnInit {
    pianos: PianoDetails;
    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.loadDigitalPianos();
    }

    loadDigitalPianos() {
        this.http.get<any>("/pianos/getUprightPianos").subscribe(
            details => {
                this.pianos = details;
            },
            err => {
                console.error(err);
            }
        );
    }
}
