import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowInspectionComponent } from './show-inspection.component';


describe('ShowInspectionComponent', () => {
  let component: ShowInspectionComponent;
  let fixture: ComponentFixture<ShowInspectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowInspectionComponent]
    });
    fixture = TestBed.createComponent(ShowInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


