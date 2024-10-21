import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePageComponent } from './feature-page.component';

describe('FeaturePageComponent', () => {
  let component: FeaturePageComponent;
  let fixture: ComponentFixture<FeaturePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
