import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBuilderPreviewComponent } from './test-builder-preview.component';

describe('TestBuilderPreviewComponent', () => {
  let component: TestBuilderPreviewComponent;
  let fixture: ComponentFixture<TestBuilderPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBuilderPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBuilderPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
