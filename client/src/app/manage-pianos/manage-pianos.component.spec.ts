import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ManagePianosComponent } from "./manage-pianos.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("ManagePianosComponent", () => {
    let component: ManagePianosComponent;
    let fixture: ComponentFixture<ManagePianosComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ManagePianosComponent],
            imports: [HttpClientTestingModule, RouterTestingModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ManagePianosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
