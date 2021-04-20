import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GrandPianosComponent } from "./grand-pianos.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("GrandPianosComponent", () => {
    let component: GrandPianosComponent;
    let fixture: ComponentFixture<GrandPianosComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GrandPianosComponent],
            imports: [HttpClientTestingModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GrandPianosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
