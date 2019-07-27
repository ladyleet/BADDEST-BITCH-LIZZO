import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LizzoSocialComponent } from './lizzo-social.component';

describe('LizzoSocialComponent', () => {
  let component: LizzoSocialComponent;
  let fixture: ComponentFixture<LizzoSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LizzoSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LizzoSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
