import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PianoDetails } from "../services/authentication.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-update-piano",
    templateUrl: "./update-piano.component.html"
})
export class UpdatePianoComponent implements OnInit {
    piano: PianoDetails;
    constructor(private http: HttpClient, private router: Router) {}

    ngOnInit() {}
}
