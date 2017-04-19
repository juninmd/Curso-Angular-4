import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatataComponent } from './batata.component';

describe('BatataComponent', () => {
  let component: BatataComponent;
  let fixture: ComponentFixture<BatataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
