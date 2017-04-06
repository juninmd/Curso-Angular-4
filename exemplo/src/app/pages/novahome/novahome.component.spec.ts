import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovahomeComponent } from './novahome.component';

describe('NovahomeComponent', () => {
  let component: NovahomeComponent;
  let fixture: ComponentFixture<NovahomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovahomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovahomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
