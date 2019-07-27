import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LizzoConcertsComponent } from './lizzo-concerts.component';

describe('LizzoConcertsComponent', () => {
  let component: LizzoConcertsComponent;
  let fixture: ComponentFixture<LizzoConcertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LizzoConcertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LizzoConcertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
