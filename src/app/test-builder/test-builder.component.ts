import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, AbstractControl } from '@angular/forms';
import { TestForm } from '../shared/test-form';

@Component({
  selector: 'tw-test-builder',
  templateUrl: './test-builder.component.html',
  styleUrls: ['./test-builder.component.scss']
})
export class TestBuilderComponent {

  formGroup = this.fb.group({
    title: ['', Validators.required],
    questions: this.fb.array([
      this.question()
    ])
  });

  constructor(private fb: FormBuilder) { }

  get questions() {
    return (this.formGroup.get('questions') as FormArray).controls;
  }

  getAnswers(question: FormGroup) {
    return (question.get('answers') as FormArray).controls;
  }

  addQuestion() {
    this.questions.push(this.question());
  }

  addAnswer(answers: AbstractControl[]) {
    answers.push(this.answer());
  }

  onSubmit() {
    const testForm = this.formGroup.getRawValue() as TestForm;
    console.log(testForm);
  }

  private question() {
    return this.fb.group({
      questionLabel: this.fb.control(''),
      answers: this.fb.array([
        this.answer()
      ])
    });
  }

  private answer() {
    return this.fb.group({
      answerLabel: this.fb.control(''),
      correct: this.fb.control(false)
    });
  }

}
