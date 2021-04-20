import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UpdatePianoComponent } from "./update-piano.component";
import { FormsModule } from "@angular/forms/";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("UpdatePianoComponent", () => {
    let component: UpdatePianoComponent;
    let fixture: ComponentFixture<UpdatePianoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UpdatePianoComponent],
            imports: [FormsModule, HttpClientTestingModule, RouterTestingModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UpdatePianoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
