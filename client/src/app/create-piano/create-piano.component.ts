import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PianoDetails } from "../services/authentication.service";
import { Router } from "@angular/router";
@Component({
    selector: "app-create-piano",
    templateUrl: "./create-piano.component.html"
})
export class CreatePianoComponent implements OnInit {
    piano: PianoDetails = {
        id: 0,
        brand: "",
        model: "",
        type: "",
        description: "",
        price: "",
        image: ""
    };
    constructor(private http: HttpClient, private router: Router) {}

    ngOnInit() {}

    createPiano(piano) {
        this.http.post("/pianos/createPiano", piano).subscribe(
            () => {
                this.router.navigateByUrl("/managePianos");
            },
            err => {
                console.log(err);
            }
        );
    }
}
