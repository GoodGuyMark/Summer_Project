import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PianoDetails } from "../services/authentication.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-manage-pianos",
    templateUrl: "./manage-pianos.component.html"
})
export class ManagePianosComponent implements OnInit {
    details: PianoDetails;
    constructor(private http: HttpClient, private router: Router) {}

    ngOnInit() {
        this.loadAllPianos();
    }

    loadAllPianos() {
        this.http.get<any>("/pianos/getPianos").subscribe(
            pianos => {
                this.details = pianos;
            },
            err => {
                console.error(err);
            }
        );
    }

    deletePiano(id: number) {
        return this.http.delete("/pianos/deletePiano/" + id).subscribe(() => {
            this.loadAllPianos();
        });
    }
}
