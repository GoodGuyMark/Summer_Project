import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UpdateProfileComponent } from "./update-profile.component";
import { FormsModule } from "@angular/forms/";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AuthenticationService } from "../services/authentication.service";

describe("UpdateProfileComponent", () => {
    let component: UpdateProfileComponent;
    let fixture: ComponentFixture<UpdateProfileComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UpdateProfileComponent],
            imports: [
                FormsModule,
                HttpClientTestingModule,
                RouterTestingModule
            ],
            providers: [AuthenticationService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UpdateProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
