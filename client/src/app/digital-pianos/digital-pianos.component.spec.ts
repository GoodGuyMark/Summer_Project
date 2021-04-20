import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DigitalPianosComponent } from "./digital-pianos.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("DigitalPianosComponent", () => {
    let component: DigitalPianosComponent;
    let fixture: ComponentFixture<DigitalPianosComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DigitalPianosComponent],
            imports: [HttpClientTestingModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DigitalPianosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
