import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CreatePianoComponent } from "./create-piano.component";
import { FormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("CreatePianoComponent", () => {
    let component: CreatePianoComponent;
    let fixture: ComponentFixture<CreatePianoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CreatePianoComponent],
            imports: [FormsModule, HttpClientTestingModule, RouterTestingModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CreatePianoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
