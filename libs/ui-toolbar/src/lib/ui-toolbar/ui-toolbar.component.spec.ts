import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiToolbarComponent } from './ui-toolbar.component';

describe('UiToolbarComponent', () => {
  let component: UiToolbarComponent;
  let fixture: ComponentFixture<UiToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
