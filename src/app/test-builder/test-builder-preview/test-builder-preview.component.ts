import { Component, Input } from '@angular/core';
import { TestForm } from 'src/app/shared/test-form';

@Component({
  selector: 'tw-test-builder-preview',
  templateUrl: './test-builder-preview.component.html',
  styleUrls: ['./test-builder-preview.component.scss']
})
export class TestBuilderPreviewComponent {

  @Input() testForm: TestForm;

  constructor() { }

}
