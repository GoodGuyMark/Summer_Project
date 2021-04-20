import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserDetails } from "../services/authentication.service";

@Component({
    selector: "app-manage-users",
    templateUrl: "./manage-users.component.html"
})
export class ManageUsersComponent implements OnInit {
    details: UserDetails;
    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.loadAllUsers();
    }

    loadAllUsers() {
        this.http.get<any>("/users/manageUsers").subscribe(
            users => {
                this.details = users;
            },
            err => {
                console.error(err);
            }
        );
    }

    deleteUser(id: number) {
        return this.http.delete("/users/deleteUser/" + id).subscribe(() => {
            this.loadAllUsers();
        });
    }
}
