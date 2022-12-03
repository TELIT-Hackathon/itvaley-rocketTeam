import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedIssueComponent } from './detailed-issue.component';

describe('DetailedIssueComponent', () => {
  let component: DetailedIssueComponent;
  let fixture: ComponentFixture<DetailedIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedIssueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
