import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPianoComponent } from './buy-piano.component';

describe('BuyPianoComponent', () => {
  let component: BuyPianoComponent;
  let fixture: ComponentFixture<BuyPianoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyPianoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyPianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
