
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TooliaNavComponent } from './toolia-nav.component';

describe('TooliaNavComponent', () => {
  let component: TooliaNavComponent;
  let fixture: ComponentFixture<TooliaNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [TooliaNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooliaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
