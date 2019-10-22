import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
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
      this.newQuestion()
    ])
  });

  constructor(private fb: FormBuilder) { }

  get questions() {
    return (this.formGroup.get('questions') as FormArray).controls;
  }

  getAnswers(question: FormGroup) {
    return (question.get('answers') as FormArray).controls;
  }

  addQuestionAfter(question: FormGroup) {
    const currentQuestionIndex = this.questions.indexOf(question);
    const nextQuestionIndex = currentQuestionIndex + 1;
    this.questions.splice(nextQuestionIndex, 0, this.newQuestion());
  }

  addAnswerAfter(question: FormGroup, answer: FormControl) {
    const answers = this.getAnswers(question);
    const currentAnswerIndex = answers.indexOf(answer);
    const nextAnswerIndex = currentAnswerIndex + 1;
    answers.splice(nextAnswerIndex, 0, this.newAnswer());
  }

  removeAnswer(question: FormGroup, answer: FormControl) {
    const answers = this.getAnswers(question);
    const answerIndex = answers.indexOf(answer);
    answers.splice(answerIndex, 1);
  }

  onSubmit() {
    const testForm = this.formGroup.getRawValue() as TestForm;
    console.log(testForm);
  }

  private newQuestion() {
    return this.fb.group({
      questionLabel: this.fb.control(''),
      answers: this.fb.array([
        this.newAnswer()
      ])
    });
  }

  private newAnswer() {
    return this.fb.group({
      answerLabel: this.fb.control(''),
      correct: this.fb.control(false)
    });
  }

}
