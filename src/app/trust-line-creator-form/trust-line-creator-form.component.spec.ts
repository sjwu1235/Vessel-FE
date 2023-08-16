import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustLineCreatorFormComponent } from './trust-line-creator-form.component';

describe('TrustLineCreatorFormComponent', () => {
  let component: TrustLineCreatorFormComponent;
  let fixture: ComponentFixture<TrustLineCreatorFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrustLineCreatorFormComponent]
    });
    fixture = TestBed.createComponent(TrustLineCreatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
