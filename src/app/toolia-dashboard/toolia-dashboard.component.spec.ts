
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooliaDashboardComponent } from './toolia-dashboard.component';

describe('TooliaDashboardComponent', () => {
  let component: TooliaDashboardComponent;
  let fixture: ComponentFixture<TooliaDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TooliaDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooliaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
