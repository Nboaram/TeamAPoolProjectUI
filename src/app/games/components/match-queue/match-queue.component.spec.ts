import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchQueueComponent } from './match-queue.component';

describe('MatchQueueComponent', () => {
  let component: MatchQueueComponent;
  let fixture: ComponentFixture<MatchQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
