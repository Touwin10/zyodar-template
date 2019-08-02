import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PullHookComponent } from './pull-hook.component';

describe('PullHookComponent', () => {
  let component: PullHookComponent;
  let fixture: ComponentFixture<PullHookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullHookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
