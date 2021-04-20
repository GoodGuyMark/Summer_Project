import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UprightPianosComponent } from "./upright-pianos.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("UprightPianosComponent", () => {
    let component: UprightPianosComponent;
    let fixture: ComponentFixture<UprightPianosComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UprightPianosComponent],
            imports: [HttpClientTestingModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UprightPianosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
