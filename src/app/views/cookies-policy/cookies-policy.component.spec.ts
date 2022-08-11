import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiespolicyComponent } from './cookies-policy.component';

describe('CookiespolicyComponent', () => {
  let component: CookiespolicyComponent;
  let fixture: ComponentFixture<CookiespolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookiespolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookiespolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
